import portada from './img/ropa1.jpg'
import { updateSquares } from './squares-bar'

function loadHome() {
    const textContent = document.querySelector('#text-content')
    let mainContentDiv
    updateSquares()

if (document.querySelector('#main-content') == null ) {
    mainContentDiv = document.createElement('div');
    mainContentDiv.id = 'main-content';

    
    textContent.replaceChild(mainContentDiv , textContent.children[2])
}
else {mainContentDiv = document.querySelector('#main-content')}

if (textContent.dataset.currentPage != 'home') {

    textContent.dataset.currentPage = 'home'

    mainContentDiv.innerHTML = ''

// Crear el título h1
const titleH1 = document.createElement('h1');
titleH1.id = 'title';
titleH1.textContent = 'Germán y Bibiana Coiffeur';

// Crear las decoraciones con las clases "decoration" y "square"
const dec1Div = document.createElement('div');
dec1Div.className = 'decoration';
dec1Div.id = 'dec-1';
const square1 = document.createElement('div');
square1.className = 'square';
const square2 = document.createElement('div');
square2.className = 'square';
dec1Div.appendChild(square1);
dec1Div.appendChild(square2);

const p = document.createElement('p');
p.textContent = 'Te ofrecemos un catálogo de prendas con diseños exclusivos confeccionadas a mano. Tu compra significa el apoyo a un negocio familiar que promueve el diseño de indumentaria artesanal necochense.';

const dec2Div = document.createElement('div');
dec2Div.className = 'decoration';
dec2Div.id = 'dec-2';
const square3 = document.createElement('div');
square3.className = 'square';
const square4 = document.createElement('div');
square4.className = 'square';
dec2Div.appendChild(square3);
dec2Div.appendChild(square4);

mainContentDiv.appendChild(titleH1);
mainContentDiv.appendChild(dec1Div);
mainContentDiv.appendChild(p);
mainContentDiv.appendChild(dec2Div);

// Crear la imagen
const homeImg = document.createElement('img');
homeImg.id = 'home-img';
homeImg.src = portada;
homeImg.alt = 'Ropa confeccionada a mano';

const imgContentDiv = document.createElement('div');
imgContentDiv.id = 'img-content';
imgContentDiv.appendChild(homeImg);
textContent.parentElement.replaceChild(imgContentDiv, textContent.nextElementSibling)
}
}

export {loadHome}