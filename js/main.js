window.onload = function () {
  document.getElementById('changeBg').addEventListener('mouseover', changeColorBg);
  document.getElementById('changeBg').addEventListener('mouseout', changeColorBack);
};

function changeColorBg() {
  document.getElementById('gitBg').style.color = '#dce1e3';
  document.getElementById('linkedBg').style.color = '#dce1e3';
}

function changeColorBack() {
  document.getElementById('gitBg').style.color = '';
  document.getElementById('linkedBg').style.color = '';
}
