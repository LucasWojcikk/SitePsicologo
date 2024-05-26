function getResponseApi() {
    fetch("http://localhost:8080/psicologo")
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


function addPost(post) {
    console.log(post)
    // Seleciona a div onde as postagens serão inseridas
    const postagensContainer = document.getElementById("psicologos");

    // Cria a estrutura HTML para uma nova postagem com flip card
    const postElement = document.createElement("div");
    postElement.className = "col-md-4";
    postElement.innerHTML = `
        <div class="card mb-4 shadow-sm">
            <div class="card-body">
                <h5 class="card-title">Dr. ${post.nomeCompleto}</h5>
                <p class="card-text">Data de Nascimento: ${post.dataNascimento}</p>
                <p class="card-text">Data de Formação: ${post.dataFormacao}</p>
                <p class="card-text">Resumo do Currículo: ${post.resumoProfissional}.</p>
                <p class="card-text">Email: ${post.email}</p>
                <p class="card-text">CRP: ${post.crp}</p>
            </div>
        </div>
    `;

    // Adiciona a nova postagem ao container de postagens
    postagensContainer.querySelector('.row').appendChild(postElement);
}

// function redirectToPosts(){
//     window.location.href = '/pagePost.html';
// }

function redirectToPosts(id){
    window.location.href = `/pagePost.html?id=${id}`;
}




