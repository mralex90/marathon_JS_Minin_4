const board = document.querySelector('#board')
const colors = ['#e74c3c', '#8e44ad','#2e5e84', '#bbd70b', '#3498db', '#e67e22', '#2ecc71','#fbf2eb', '#fa9705', '#d7beac','#16da41','#db3f3f','#6b5555','#3dbddd','#f3e51e','#ad2685']
const SQUEARES_NUMBER = 600

for (let i = 0; i < SQUEARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}