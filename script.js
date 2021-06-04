const container = document.querySelector('#container');

const makeGrid = (num) => {
  for (let i = 0; i < num*num; i++) {
    container.style['grid-template-columns'] = `repeat(${num}, 1fr)`;
    let element = document.createElement('div');
    element.style.border = '1px solid rgba(195, 195, 195, 0.6)';
    container.appendChild(element);
  };
};

const clearCanvas = () => {
  divs.forEach((div) => {
    div.style.background = 'white';
  });
};

const generateColor = () => {
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  color = `rgb(${r}, ${g}, ${b})`;
};

const paint = () => {
  const divs = document.querySelectorAll('#container>div');
  divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.background = color;
    });
  });
};

var gridSide = 16;  // default size
var color = '#6f1087';  // default color
makeGrid(gridSide);  // default grid

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id == 'clearButton') {
      clearCanvas()
    } else if (button.id == 'sizePicker') {
      gridSide = parseInt(prompt('How many squares per side do you want? Please enter a number from 3 to 40.'));
      if (gridSide < 3 || gridSide > 40) {
        alert('Invalid number!')
      } else {
        //remove all existing divs
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        };
      makeGrid(gridSide);
      }
    } else if (button.id == 'colorPicker') {
      generateColor();
    }
  });
});
