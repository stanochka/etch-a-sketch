const container = document.querySelector('#container');
console.log(container);

const makeGrid = () => {
  for (let i = 0; i < 16*16; i++) {
    container.style['grid-template-columns'] = 'repeat(16, 1fr)';
    let element = document.createElement('div');
    element.style.border = '1px solid rgba(195, 195, 195)';
    element.id = `cell${i}`;
    container.appendChild(element);
    console.log(`Div id=${element.id} added`);
  }
}

makeGrid()
