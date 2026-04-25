import './style.css'
import hourImg from './assets/Hour.png'
import playImg from './assets/Play.png'
import cameraBtnImg from './assets/Camera.png'
import chatBtnImg from './assets/Chat.png'
import projectsBtnImg from './assets/Projects.png'
import shiftBtnImg from './assets/Shift.png'



/* HOUR CELLS START */
function createHourCell(): HTMLImageElement {
  const img = document.createElement('img')
  img.src = hourImg
  img.className = 'hour-cell'
  return img
}

function renderHours(count: number): void {
  const container = document.getElementById('hours')
  if (!container) return

  container.innerHTML = ''

  for (let i = 0; i < count; i++) {
    const cell = createHourCell()
    container.appendChild(cell)
  }
}

function init(): void {
  renderHours(8)
}

init()
/* HOUR CELLS END */


/* PLAY START*/
function playBtn() {

  const container = document.getElementById('playBtn')

  const img = document.createElement('img')

  img.src = playImg

  container?.appendChild(img)
}

playBtn()

/* PLAY END*/


/* BUTTONS GRID START */

const gridBtnArrey = [
  { id: 1, name: 'camera', img: cameraBtnImg },
  { id: 2, name: 'chat', img: chatBtnImg },
  { id: 3, name: 'projects', img: projectsBtnImg },
  { id: 4, name: 'shift', img: shiftBtnImg },
]



function createBtnCell(): HTMLImageElement {
  const img = document.createElement('img')
  img.src = cameraBtnImg
  img.className = 'btn-cell'
  return img
}

function renderBtnCells() {
  const container = document.getElementById('gridBtn')

  for (let i = 0; i < gridBtnArrey.length; i++) {
    const element = createBtnCell();
    container?.appendChild(element)
  }
}

renderBtnCells()



/* BUTTONS GRID END */