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

// Seleção dos novos elementos
const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
const loadingIndicator = document.getElementById('loading');
const favoritesList = document.getElementById('favoritesList');

// Função para alternar modo escuro
toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleDarkModeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
});

// Mostrar indicador de carregamento enquanto o iframe carrega
newsFrame.addEventListener('load', () => {
    loadingIndicator.style.display = 'none';
});

newsFrame.addEventListener('beforeunload', () => {
    loadingIndicator.style.display = 'block';
});

// Função para adicionar favorito
newsListItems.forEach(item => {
    const star = document.createElement('span');
    star.textContent = '⭐';
    star.style.marginLeft = '10px';
    star.style.cursor = 'pointer';
    item.appendChild(star);

    star.addEventListener('click', (e) => {
        e.stopPropagation();
        addFavorite(item.textContent.replace('⭐', ''), item.getAttribute('data-url'));
    });
});

// Função para adicionar favorito à lista
function addFavorite(name, url) {
    const li = document.createElement('li');
    li.textContent = name;
    li.setAttribute('data-url', url);
    favoritesList.appendChild(li);

    // Adicionar evento de clique
    li.addEventListener('click', () => {
        loadNews(url);
        highlightActive(item);
    });
}

// Função para salvar favoritos no localStorage
function saveFavorites() {
    const favorites = [];
    favoritesList.querySelectorAll('li').forEach(li => {
        favorites.push({ name: li.textContent, url: li.getAttribute('data-url') });
    });
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Função para carregar favoritos do localStorage
function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.forEach(fav => addFavorite(fav.name, fav.url));
}

// Salvar favoritos quando a página é fechada
window.addEventListener('beforeunload', saveFavorites);

// Carregar favoritos ao iniciar
window.addEventListener('DOMContentLoaded', loadFavorites);
