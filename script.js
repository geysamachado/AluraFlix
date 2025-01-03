// Seleção dos elementos DOM
const homeButton = document.querySelector('.btn:nth-child(1)');
const newVideosButton = document.querySelector('.btn:nth-child(2)');
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const videoThumbnails = document.querySelectorAll('.video-thumbnail');
const backgroundVideo = document.querySelector('.background-video');

// Ação ao clicar no botão HOME
homeButton.addEventListener('click', () => {
    alert('');
});

// Ação ao clicar no botão NOVOS VÍDEOS
newVideosButton.addEventListener('click', () => {
    alert('');
});

// Ação na barra de pesquisa
searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário
    const query = searchInput.value.toLowerCase();

    videoThumbnails.forEach(thumbnail => {
        const altText = thumbnail.alt.toLowerCase();
        if (altText.includes(query)) {
            thumbnail.style.display = 'block';
        } else {
            thumbnail.style.display = 'none';
        }
    });
});

// Controle manual do vídeo de fundo
backgroundVideo.addEventListener('click', () => {
    if (backgroundVideo.paused) {
        backgroundVideo.play();
    } else {
        backgroundVideo.pause();
    }
});