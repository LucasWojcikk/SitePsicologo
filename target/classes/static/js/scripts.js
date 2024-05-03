function onPageLoad() {
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
    const postContent = document.createElement("h1");
    postContent.textContent = `${post.id}\n${post.titulo}\n${post.conteudo}`;
	 // Usando o título da postagem
    const divPost = document.getElementById("postagens");
    divPost.appendChild(postContent);
}