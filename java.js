// JavaScript para o Carrossel da Toki.Co

function scrollCarousel(direction) {
    const container = document.getElementById('carousel-container');
    const scrollAmount = 300; // Quantidade de pixels para rolar
    
    // Verifica se o container existe
    if (!container) {
        console.error('Container do carrossel não encontrado!');
        return;
    }
    
    // Rola o container na direção especificada
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Opcional: Auto-scroll (descomente se quiser rolagem automática)
// setInterval(() => {
//     scrollCarousel(1);
// }, 5000);