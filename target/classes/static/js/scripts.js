// Index - botão alterar tema
function toggleDarkTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark');{

        // Incompleto, vou terminar - Letícia
    }
}

// Seleciona a imagem
var image = document.getElementById("interactive-image");

// Adiciona um ouvinte de eventos para o evento de passagem do mouse
image.addEventListener("mouseover", function() {
    // Altera o tamanho da imagem ao passar o mouse
    image.style.transform = "scale(1.1)";
});

// Adiciona um ouvinte de eventos para o evento de retirada do mouse
image.addEventListener("mouseout", function() {
    // Retorna ao tamanho original da imagem quando o mouse é retirado
    image.style.transform = "scale(1)";
});

<<<<<<< HEAD
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
=======
//analisando possibilidades de interatividade no site usando js /\
>>>>>>> main

function redirectToPosts(){
    window.location.href = '/pagePost.html';
}




