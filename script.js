const container = document.querySelector('#container');
console.log(container);

const makeGrid = () => {
  for (let i = 0; i < 16*16; i++) {
    container.style['grid-template-columns'] = 'repeat(16, 1fr)';
    let element = document.createElement('div');
    element.style.border = '1px solid rgba(195, 195, 195, 0.6)';
    element.id = `cell${i}`;
    container.appendChild(element);
  }
}

makeGrid()

const divs = document.querySelectorAll('#container>div');
divs.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.style.background = '#6f1087';
  });
});

const clearCanvas = () => {
  divs.forEach((div) => {
    div.style.background = 'white';
  })
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id == 'clearButton') {
      clearCanvas()
    }
  });
});
