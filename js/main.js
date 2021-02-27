window.onload = function () {
  document.getElementById('changeBg').addEventListener('mouseover', changeColorBg);
  document.getElementById('changeBg').addEventListener('mouseout', changeColorBack);
};

function changeColorBg() {
  document.body.style.backgroundColor = '#304E7C';
}

function changeColorBack() {
  document.body.style.backgroundColor = '#004E7C';
}
