function getPostIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function getResponseApi() {
    const postId = getPostIdFromUrl();
    console.log(postId)
    fetch(`http://localhost:8080/postagem/${postId}`)
        .then(response => response.json())
        .then(post => showData(post))
}

function showData(post) {
    const title = document.getElementById("postTitle")
    const autor = document.getElementById("postAuthor")
    const data = document.getElementById("postData")
    const resumo = document.getElementById("postSummary")
    const conteudo = document.getElementById("postContent")

    title.textContent = post.titulo
    autor.textContent = post.autor
    // data.data = post.dataPostagem
    resumo.textContent = post.resumo
    conteudo.textContent = post.conteudo

}

function updateData () {
    const postId = getPostIdFromUrl();

    var postagem = {
        "id": postId,
        "titulo": document.getElementById("postTitle").value,
        "resumo": document.getElementById("postSummary").value,
        "conteudo": document.getElementById("postContent").value,
        "dataPostagem": document.getElementById("postDate").value,
        "autor": document.getElementById("postAuthor").value
    };
    
    // console.log(postagem);

    fetch('http://localhost:8080/postagem', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postagem)
    })
    .then(data => {
        alert("Postagem atualizada com sucesso!");
        window.location.href = "posts.html"; 
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Ocorreu um erro ao criar a postagem.");
    });

}
