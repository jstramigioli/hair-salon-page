import whatsappSvg from './img/whatsapp-pink.svg'
import locationSvg from './img/location-pink.svg'
import portada from './img/ropa1.jpg'
import { updateSquares } from './squares-bar'

function loadContact() {
    const textContent = document.querySelector('#text-content')
    let mainContentDiv
    updateSquares()

if (document.querySelector('#main-content') == null ) {
    mainContentDiv = document.createElement('div');
    mainContentDiv.id = 'main-content';

    
    textContent.replaceChild(mainContentDiv , textContent.children[2])
}
else {mainContentDiv = document.querySelector('#main-content')}

if (textContent.dataset.currentPage != 'contact') {

    textContent.dataset.currentPage = 'contact'

    mainContentDiv.innerHTML = ''


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
p.id = 'text-area-title'
p.textContent = 'DEJANOS TU CONSULTA';


const textArea = document.createElement('textarea');
        textArea.id = 'mensaje';
        textArea.maxLength = 900;
        textArea.placeholder = 'Escribí tu mensaje acá';
        textArea.style.resize = 'none';

const sendBtn = document.createElement('button')
sendBtn.textContent = 'Enviar'

const contactData = document.createElement('div')
contactData.id = 'contact-data'

const whatsappIcon = document.createElement('img')
whatsappIcon.src = whatsappSvg
whatsappIcon.classList.add('contact-icon')
const whatsappNum = document.createElement('p')
whatsappNum.textContent = '2252-4739546'
const whatsapp = document.createElement('div')
whatsapp.classList.add('contact-info')
whatsapp.appendChild(whatsappIcon)
whatsapp.appendChild(whatsappNum)

const locationIcon = document.createElement('img')
locationIcon.src = locationSvg
locationIcon.classList.add('contact-icon')
const locationText = document.createElement('p')
locationText.textContent = 'Diagonal San Martin 10'
const location = document.createElement('div')
location.classList.add('contact-info')
location.appendChild(locationIcon)
location.appendChild(locationText)

contactData.appendChild(whatsapp)
contactData.appendChild(location)


mainContentDiv.appendChild(dec1Div);
mainContentDiv.appendChild(p);
mainContentDiv.appendChild(textArea);
mainContentDiv.appendChild(sendBtn)
mainContentDiv.appendChild(contactData);


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

export {loadContact}