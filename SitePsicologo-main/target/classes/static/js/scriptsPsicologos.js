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
                <a class="edit text-black" onclick="updatePsicologo(${post.id})" 
                    style="
                        float: right;
                        margin-left: 5px;
                        margin-bottom: 5px;
                        color: black;
                ">
                    <ion-icon name="create-outline"></ion-icon>
                </a>
                <a class="trash text-black" onclick="deletePsicologo(${post.id})" 
                    style="
                        float: right;
                        margin-left: 5px;
                        margin-bottom: 5px;
                        color: black;
                ">
                    <ion-icon name="trash-outline"></ion-icon>
                </a>
            </div>
        </div>
    `;

    // Adiciona a nova postagem ao container de postagens
    postagensContainer.querySelector('.row').appendChild(postElement);
}

function redirectToPosts(id){
    window.location.href = `/pagePost.html?id=${id}`;
}

function deletePsicologo(id){
    fetch(`http://localhost:8080/psicologo/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Psicologo deletada com sucesso!');
            window.location.href = '/psicologos.html'; // Redireciona para a página de posts
        }
    });
}


function updatePsicologo(id){
    window.location.href = `/updatePsicologo.html?id=${id}`;
}


