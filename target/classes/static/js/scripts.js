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
        <div onclick ="redirectToPosts()" class="flip-card">
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

function redirectToPosts(){
    window.location.href = '/pagePost.html';
}


function createPost() {
    var postagem = {
        "titulo": document.getElementById("postTitle").value,
        "resumo": document.getElementById("postSummary").value,
        "conteudo": document.getElementById("postContent").value,
        "dataPostagem": document.getElementById("postDate").value,
        "autor": document.getElementById("postAuthor").value
    };
    
    // console.log(postagem);

    fetch('http://localhost:8080/cadastrar-postagem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postagem)
    })
    .then(data => {
        alert("Postagem criada com sucesso!");
        window.location.href = "posts.html"; 
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Ocorreu um erro ao criar a postagem.");
    });
}

