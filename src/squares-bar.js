const updateSquares = () => {
const barContainer = document.querySelector('#side-bar')

const height = barContainer.offsetHeight


const squareLength = height / 12
const gap = squareLength / 5

const colNum = 3
const rowNum = Math.floor((gap + height) / (squareLength + gap)) 
const squareNum = colNum*rowNum

document.documentElement.style.setProperty('--gap', `${gap}px`);
document.documentElement.style.setProperty('--square-size', `${squareLength}px`);

barContainer.innerHTML = '';

   for (let i = 0 ; i < squareNum ; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        if (Math.random() < 0.05) {
            square.classList.add('white-square');
          }
        else if (Math.random() < 0.1) {
            square.classList.add('black-square');
          }

        barContainer.appendChild(square)
    }
    
}

const addSquares = () => {
    updateSquares()
    window.addEventListener('resize', updateSquares)
}

export default addSquares