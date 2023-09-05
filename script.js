const gridContainerDiv = document.querySelector('.grid-container');
const DEFAULT_SIZE = 16;

resetGrid = (div) => {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

createGrid = (size) => {
  resetGrid(gridContainerDiv);

  gridContainerDiv.setAttribute('style', `
    grid-template-columns: repeat(${size}, 2fr);
    grid-template-rows: repeat(${size}, 2fr);
  `);

  for (let i = 0; i < (size*size); i++) {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cell');
    
    // cellDiv.addEventListener('mouseover', (e) => {
    //   e.target.style.backgroundColor = 'black';
    // })

    gridContainerDiv.appendChild(cellDiv);
  }

  let cells = gridContainerDiv.children;
  for (cell of cells) {
    cell.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'black';
    })
  }
}

const changeSizeBtn = document.querySelector('#changeSize');
changeSizeBtn.addEventListener('click', () => {
  let size = prompt("what size u want?");

  if (size > 0 && size < 100){
    createGrid(size);
  } else {
    alert("choose btwn 1 and 100 pls.")
  }
})

const eraseGridBtn = document.querySelector('#eraseGrid');
eraseGridBtn.addEventListener('click', () => {
  let cells = gridContainerDiv.children;

  for (cell of cells) {
    cell.style.backgroundColor = 'lightgrey';
  }
})

const changeColorBtn = document.querySelector('#changeColor');
changeColorBtn.addEventListener('input', () => {
  let newColor = changeColorBtn.value;

  let cells = gridContainerDiv.children;
  for (cell of cells) {
    cell.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = newColor;
    })
  }
})

createGrid(DEFAULT_SIZE);