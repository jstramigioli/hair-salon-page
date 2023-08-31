import { loadPage} from './load-page.js'

loadPage()

import { addSquares } from './squares-bar.js'

addSquares()

/*import clearMainContent from './clear-content.js'*/




import { updateBrowser } from './load-catalog.js'


import { loadHome } from './load-index.js'

import { loadContact } from './load-contact.js'


const catalogBtn = document.querySelector('#catalogo-btn')
catalogBtn.addEventListener('click', updateBrowser)

const homeBtn = document.querySelector('#inicio-btn')
homeBtn.addEventListener('click', loadHome)

const contactBtn = document.querySelector('#contacto-btn')
contactBtn.addEventListener('click', loadContact)