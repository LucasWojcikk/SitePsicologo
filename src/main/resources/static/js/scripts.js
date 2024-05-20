function getResponseApi() {
    fetch("http://localhost:8080/postagens")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.forEach(function(post) {
                addPost(post)
                // console.log(post);
            });
        });
}

// function addPost(post) {
//     console.log(post["titulo"])

// }

function addPost(post) {
    // Seleciona a div onde as postagens serão inseridas
    const postagensContainer = document.getElementById("postagens");

    // Cria a estrutura HTML para uma nova postagem com flip card
    const postElement = document.createElement("div");
    postElement.className = "col-md-4";
    postElement.innerHTML = `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <p class="title">${post.titulo}</p>
                </div>
                <div class="flip-card-back">
                    <p>${post.resumo}</p>
                    <p>${post.autor}</p>
                    <p>${post.dataPostagem}</p>
                </div>
            </div>
        </div>
    `;

    // Adiciona a nova postagem ao container de postagens
    postagensContainer.querySelector('.row').appendChild(postElement);
}

document.addEventListener('DOMContentLoaded', getResponseApi);

// function createNewPost(titulo, resumo, conteudo, dataPostagem, autor){
//     fetch("http://127.0.0.1:5500/createPost.html",
//     {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify({
//             titulo: titulo,
//             resumo: resumo,
//             conteudo: conteudo,
//             dataPostagem: dataPostagem,
//             autor: autor
//         })
//     })
//     .then(function (res) {console.log(res)}).
//     catch(function (res) {console.log(res)})
// }

// function limparForm(regTitulo, regResumo, regConteudo, regDataPostagem, regAutor) {
//     regTitulo.value = ""
//     regResumo.value = ""
//     regConteudo.value = ""
//     regDataPostagem.value = ""
//     regAutor.value = ""
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const newPost = document.querySelector("form");
//     const regAutor = document.querySelector(".autor");
//     const regConteudo = document.querySelector(".conteudo");
//     const regDataPostagem = document.querySelector(".data");
//     const regResumo = document.querySelector(".resumo");
//     const regTitulo = document.querySelector(".titulo");

//     newPost.addEventListener('submit', function (event){
//         event.preventDefault();
        
//         createNewPost(
//             regTitulo.value, regResumo.value, regConteudo.value, regDataPostagem.value, regAutor.value
//         )
//         // const dados = {
//         //     titulo: regTitulo.value,
//         //     resumo: regResumo.value,
//         //     conteudo: regConteudo.value,
//         //     dataPostagem: regDataPostagem.value,
//         //     autor: regAutor.value,
//         // };
//         // console.log(dados);
//         limparForm(regTitulo, regResumo, regConteudo, regDataPostagem, regAutor)
//     });
// });
