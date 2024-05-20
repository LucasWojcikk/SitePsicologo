function getResponseApi() {
    fetch("http://localhost:8080/postagens")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.forEach(function(post) {
                addPost(post);
            });
        });
}

function addPost(post) {
    const divPost = document.getElementById("postagens");

    for (const key in post) {
        const postItem = document.createElement("p");
        postItem.textContent = `${key}: ${post[key]}`;
        divPost.appendChild(postItem);
    }
}

function createNewPost(titulo, resumo, conteudo, dataPostagem, autor){
    fetch("http://127.0.0.1:5500/createPost.html",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                titulo: titulo,
                resumo: resumo,
                conteudo: conteudo,
                dataPostagem: dataPostagem,
                autor: autor
            })
        })
        .then(function (res) {console.log(res)}).
    catch(function (res) {console.log(res)})
}

function limparForm(regTitulo, regResumo, regConteudo, regDataPostagem, regAutor) {
    regTitulo.value = ""
    regResumo.value = ""
    regConteudo.value = ""
    regDataPostagem.value = ""
    regAutor.value = ""
}

document.addEventListener('DOMContentLoaded', function() {
    const newPost = document.querySelector("form");
    const regAutor = document.querySelector(".autor");
    const regConteudo = document.querySelector(".conteudo");
    const regDataPostagem = document.querySelector(".data");
    const regResumo = document.querySelector(".resumo");
    const regTitulo = document.querySelector(".titulo");

    newPost.addEventListener('submit', function (event){
        event.preventDefault();

        createNewPost(
            regTitulo.value, regResumo.value, regConteudo.value, regDataPostagem.value, regAutor.value
        )
        // const dados = {
        //     titulo: regTitulo.value,
        //     resumo: regResumo.value,
        //     conteudo: regConteudo.value,
        //     dataPostagem: regDataPostagem.value,
        //     autor: regAutor.value,
        // };
        // console.log(dados);
        limparForm(regTitulo, regResumo, regConteudo, regDataPostagem, regAutor)
    });
});