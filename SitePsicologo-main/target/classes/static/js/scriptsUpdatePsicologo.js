function getPostIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function getResponseApi() {
    const postId = getPostIdFromUrl();
    console.log(postId)
    fetch(`http://localhost:8080/psicologo/${postId}`)
        .then(response => response.json())
        .then(post => showData(post))
}


function showData(post) {
    const nomeCompleto = document.getElementById("fullName")
    const dataNascimento = document.getElementById("birthDate")
    const dataFormacao = document.getElementById("graduationDate")
    const resumoProfissional = document.getElementById("resumeSummary")
    const emailTeste = document.getElementById("email")
    const crp = document.getElementById("crp")

    nomeCompleto.textContent = post.nomeCompleto
    dataNascimento.value = post.dataNascimento
    dataFormacao.value = post.dataFormacao
    resumoProfissional.textContent = post.resumoProfissional
    emailTeste.textContent = post.email
    crp.textContent = post.crp

}

function updatePsicologo () {
    const postId = getPostIdFromUrl();

    var postagem = {
        "id": postId,
        "nomeCompleto": document.getElementById("fullName").value,
        "dataNascimento": document.getElementById("birthDate").value,
        "dataFormacao": document.getElementById("graduationDate").value,
        "resumoProfissional": document.getElementById("resumeSummary").value,
        "email": document.getElementById("email").value,
        "crp": document.getElementById("crp").value
    };
    
    console.log(postagem);

    fetch('http://localhost:8080/psicologo', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postagem)
    })
    .then(data => {
        alert("Psicologo atualizado com sucesso!");
        window.location.href = "psicologos.html"; 
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Ocorreu um erro ao criar a postagem.");
    });

}
