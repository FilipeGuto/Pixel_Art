function createBox() {
  const largura = 18;
  const comprimento = 18;
  const base = largura * comprimento;

  for (let index = 0; index < base; index += 1) {
    const div = document.createElement('div');
    const pai = document.querySelector('#pixel-board');
    div.className = 'pixel';
    pai.appendChild(div);
  }
}
createBox();

const select = document.querySelectorAll('.color');
function color() {
  for (let index = 0; index < select.length; index += 1) {
    select[index].addEventListener('click', (event) => {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}
color();

document.getElementById('black').style.backgroundColor = 'black'; 
document.getElementById('color1').style.backgroundColor = 'peru'; 
document.getElementById('color2').style.backgroundColor = 'grey'; 
document.getElementById('color3').style.backgroundColor = 'BlueViolet'; 
document.getElementById('color4').style.backgroundColor = 'pink'; 
document.getElementById('borracha').style.backgroundColor = 'white';

const classPixel = document.querySelectorAll('.pixel');
function altColor() {
  for (let index = 0; index < classPixel.length; index += 1) {
    classPixel[index].addEventListener('click', (event) => {
      const colorSelect = document.querySelector('.selected').style.backgroundColor;
      const click = event.target;
      click.style.backgroundColor = colorSelect;
    });
  }
}
altColor();

function clear() {
  const botao = document.querySelector('#clear-board');
  const pixels = document.querySelectorAll('.pixel');
  botao.addEventListener('click', (event) => {
    const click = event.target;
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
      click.style.backgroundColor = 'white';
    }
  });
}
clear();
