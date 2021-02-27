window.onload = function () {
  document.getElementById('changeBg').addEventListener('mouseover', changeColorBg);
  document.getElementById('changeBg').addEventListener('mouseout', changeColorBack);
};

function changeColorBg() {
  document.body.style.backgroundColor = '#342e37';
}

function changeColorBack() {
  document.body.style.backgroundColor = '#736f72';
}
