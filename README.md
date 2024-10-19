# Global News Hub
![image](https://github.com/user-attachments/assets/67056ea8-8d89-4079-a9c8-e40cffdb79f2)
https://dvalenascimento.github.io/globalNewHub.project/

## Descrição
O **Global News Hub** é um portal que permite o acesso fácil e rápido aos principais jornais de diferentes partes do mundo, oferecendo uma experiência simples e intuitiva para navegar entre fontes de notícias internacionais. Além disso, possui funcionalidades avançadas como modo escuro, barra de busca para localizar jornais, favoritos e carregamento dinâmico de notícias.

## Funcionalidades

1. **Lista de Jornais**: 
   - Navegue facilmente entre jornais de renome como *The New York Times*, *Le Monde*, *Folha de São Paulo*, entre outros.
   - Clique em qualquer jornal da lista para visualizar as notícias no iframe principal.

2. **Barra de Busca**: 
   - Pesquise rapidamente um jornal pelo nome usando a barra de busca.
   - À medida que você digita, a lista de jornais é filtrada automaticamente.

3. **Modo Escuro/Claro**: 
   - Alterna entre os modos claro e escuro para uma leitura mais confortável, com um simples clique no botão "Modo Escuro".

4. **Favoritos**: 
   - Adicione jornais aos seus favoritos clicando na estrela ao lado do nome do jornal.
   - Os favoritos são salvos localmente e carregados automaticamente na próxima vez que você abrir o site.

5. **Carregamento Dinâmico**: 
   - Exibe um indicador de carregamento enquanto as notícias são carregadas no iframe.

## Tecnologias Utilizadas

- **HTML5**: Para a estrutura básica da página.
- **CSS3**: Para a estilização da interface, responsividade e modo escuro.
- **JavaScript**: Para adicionar interatividade, como a barra de busca, alternância de modo escuro, favoritos e carregamento dinâmico.
- **LocalStorage**: Para salvar os jornais favoritos do usuário localmente.

## Estrutura de Arquivos

```bash
.
├── index.html       # Estrutura principal da página
├── css
│   └── styles.css   # Estilos da página
└── js
    └── script.js    # Lógica de interação com a página
```

### Estrutura HTML

O HTML organiza o conteúdo principal, com um cabeçalho que contém o logotipo, o título, uma barra de busca e a lista de jornais. O conteúdo das notícias é exibido dentro de um iframe, e há uma seção de favoritos que o usuário pode gerenciar.

### Estilos CSS

O arquivo CSS gerencia a paleta de cores e a responsividade, oferecendo uma experiência consistente em dispositivos móveis e desktop. Além disso, inclui a alternância para o modo escuro e as animações de carregamento.

### Funcionalidades JavaScript

O arquivo `script.js` contém a lógica para interagir com a interface. Ele:

- Carrega as páginas de notícias no iframe.
- Filtra os jornais com base na busca do usuário.
- Alterna entre o modo escuro e claro.
- Gerencia a lista de favoritos, salvando e recuperando do `localStorage`.

## Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/global-news-hub.git
   ```
2. Navegue até o diretório:
   ```bash
   cd global-news-hub
   ```
3. Abra o arquivo `index.html` no seu navegador para iniciar o portal de notícias.

## Contribuição

Sinta-se à vontade para abrir *issues* ou *pull requests* para sugestões de melhorias, correções de bugs ou novas funcionalidades.
