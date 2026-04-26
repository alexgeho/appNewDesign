import './style.scss'
import hourImg from './assets/Hour.png'
import playImg from './assets/Play.png'
import cameraBtnImg from './assets/Camera.svg'
import chatBtnImg from './assets/Chat.svg'
import projectsBtnImg from './assets/Projects.svg'
import shiftBtnImg from './assets/Shift.svg'



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

type Btn = {
  name: string
  img: string
}

const gridBtnArrey: Btn[] = [
  { name: 'Camera', img: cameraBtnImg },
  { name: 'Chat', img: chatBtnImg },
  { name: 'Projects', img: projectsBtnImg },
  { name: 'Shift history', img: shiftBtnImg },
]

function createBtnCell(btn: Btn): HTMLDivElement {
  const wrapper = document.createElement('div')
  wrapper.className = 'btn'

  const img = document.createElement('img')
  img.src = btn.img
  img.className = 'btn-icon'

  const text = document.createElement('p')
  text.textContent = btn.name
  text.className = 'btn-text'

  wrapper.appendChild(img)
  wrapper.appendChild(text)

  return wrapper
}

function renderBtnCells() {
  const container = document.getElementById('gridBtn')
  if (!container) return

  container.innerHTML = ''

  for (let i = 0; i < gridBtnArrey.length; i++) {
    const element = createBtnCell(gridBtnArrey[i])
    container.appendChild(element)
  }
}

renderBtnCells()



/* BUTTONS GRID END */