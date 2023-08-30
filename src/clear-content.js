const mainContentDiv = document.querySelector('#text-content').children[1]

const clearMainContent = () => {
    mainContentDiv.parentElement.removeChild(mainContentDiv)
}

export default clearMainContent