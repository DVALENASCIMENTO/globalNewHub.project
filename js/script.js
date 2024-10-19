// Seleção dos elementos
const newsListItems = document.querySelectorAll('#newsList li');
const newsFrame = document.getElementById('newsFrame');
const searchBar = document.getElementById('searchBar');

// Função para carregar a URL no iframe
function loadNews(url) {
    newsFrame.src = url;
}

// Adicionar evento de clique a cada item da lista
newsListItems.forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        loadNews(url);
    });
});

// Função de filtro de jornais
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    newsListItems.forEach(item => {
        const jornal = item.textContent.toLowerCase();
        if (jornal.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Função para destacar o jornal ativo
function highlightActive(item) {
    newsListItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
}

// Atualizar o iframe e destacar o ativo
newsListItems.forEach(item => {
    item.addEventListener('click', () => {
        loadNews(item.getAttribute('data-url'));
        highlightActive(item);
    });
});

// Carregar o primeiro jornal como ativo inicialmente
if (newsListItems.length > 0) {
    newsListItems[0].classList.add('active');
}
