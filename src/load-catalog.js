const catalogBrowserDiv = document.createElement('div')
catalogBrowserDiv.id = 'catalog-browser'

import { catalog } from './catalog.js'
import { updateSquares } from './squares-bar'


function addArticleToBrowser(article) {
    const articleDiv = document.createElement('div')
    articleDiv.classList.add('article')
    articleDiv.dataset.artName = article.name;

    const articleImg = document.createElement('img')
    articleImg.classList.add('article-img');
    articleImg.src = article.img;
    articleImg.alt = article.name;

    articleDiv.appendChild(articleImg);

    articleDiv.addEventListener('click', updtArticleHandler)

    return articleDiv
}

function updateBrowser(articleList) {
    if (catalogBrowserDiv.children.length == 0) {
    for (let i = 0; i < articleList.length ; i++) {
        catalogBrowserDiv.appendChild(addArticleToBrowser(articleList[i]))
    }}
    const textContent = document.querySelector('#text-content')
    textContent.dataset.currentPage = 'catalog'
    textContent.replaceChild(catalogBrowserDiv, textContent.children[2])
}

function updtArticleHandler(event) {
    if (event.currentTarget.tagName === 'DIV') {
    updateSelectedArticle(catalog.filter((article) => article.name == event.currentTarget.dataset.artName)[0])
}
}

function updateSelectedArticle(article) {
    updateSquares()
    const content = document.querySelector('#content')
    const selectedArticleContainer = document.createElement('div')
    selectedArticleContainer.id = 'selected-article-container'

    const artName = document.createElement('h2')
    artName.classList.add('art-name')
    artName.textContent = article.name.toUpperCase();

    const artImg = document.createElement('img')
    artImg.classList.add('selected-article-img')
    artImg.src = article.img;
    artImg.alt = article.name
    
    const artDescription = document.createElement('p')
    artDescription.classList.add('art-description')
    artDescription.textContent = article.description

    const artImgAndDescription = document.createElement('div')
    artImgAndDescription.classList.add('img-and-description')
    artImgAndDescription.appendChild(artImg)
    artImgAndDescription.appendChild(artDescription)

    const artPrice = document.createElement('h3')
    artPrice.classList.add('price')
    artPrice.textContent = `$${article.price}`

    const buyBtn = document.createElement('button')
    buyBtn.classList.add('buy-btn')
    buyBtn.textContent = 'COMPRAR'

    const buyContainer = document.createElement('div')
    buyContainer.classList.add('buy-container')
    buyContainer.appendChild(artPrice)
    buyContainer.appendChild(buyBtn)

    selectedArticleContainer.appendChild(artName);
    selectedArticleContainer.appendChild(artImgAndDescription)
    selectedArticleContainer.appendChild(buyContainer)

    content.replaceChild(selectedArticleContainer, content.children[1])
}

const updateBrowserExporter = () => {
    updateBrowser(catalog)
    updateSquares()
}

export { updateBrowserExporter as updateBrowser }