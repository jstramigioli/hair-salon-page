
const loadIndex = function ()
{// Crear el elemento div con el id "content"
const contentDiv = document.createElement('div');
contentDiv.id = 'content';

// Crear el elemento div con el id "text-content"
const textContentDiv = document.createElement('div');
textContentDiv.id = 'text-content';

// Crear el elemento header
const header = document.createElement('header');

// Crear los botones dentro del header
const inicioBtn = document.createElement('button');
inicioBtn.id = 'inicio-btn';
inicioBtn.className = 'menu-btn';
inicioBtn.textContent = 'INICIO';

const contactoBtn = document.createElement('button');
contactoBtn.id = 'contacto-btn';
contactoBtn.className = 'menu-btn';
contactoBtn.textContent = 'CONTACTO';

// Agregar los botones al header
header.appendChild(inicioBtn);
header.appendChild(contactoBtn);

// Crear el botón "CATALOGO"
const catalogoBtn = document.createElement('button');
catalogoBtn.id = 'catalogo-btn';
catalogoBtn.className = 'menu-btn';
catalogoBtn.textContent = 'CATALOGO';

// Crear el div con el id "main-content"
const mainContentDiv = document.createElement('div');
mainContentDiv.id = 'main-content';

// Crear el título h1
const titleH1 = document.createElement('h1');
titleH1.id = 'title';
titleH1.textContent = 'Germán y Bibiana Coiffeur asdfas';

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

// Crear el div con el id "side-bar"
const sideBarDiv = document.createElement('div');
sideBarDiv.id = 'side-bar';

// Crear el div con el id "img-content"
const imgContentDiv = document.createElement('div');
imgContentDiv.id = 'img-content';

// Crear la imagen
const homeImg = document.createElement('img');
homeImg.id = 'home-img';
homeImg.src = '../src/img/ropa1.jpg';
homeImg.alt = 'Ropa confeccionada a mano';

// Agregar elementos a la estructura
textContentDiv.appendChild(header);
textContentDiv.appendChild(catalogoBtn);
mainContentDiv.appendChild(titleH1);
mainContentDiv.appendChild(dec1Div);
mainContentDiv.appendChild(p);
mainContentDiv.appendChild(dec2Div);
textContentDiv.appendChild(mainContentDiv);

imgContentDiv.appendChild(homeImg);

contentDiv.appendChild(textContentDiv);
contentDiv.appendChild(imgContentDiv);

// Agregar la estructura completa al documento
document.body.appendChild(contentDiv);

}

export {loadIndex}