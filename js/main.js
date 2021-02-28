window.onload = function () {
  document.getElementById('changeBg').addEventListener('mouseover', changeColorBg);
  document.getElementById('changeBg').addEventListener('mouseout', changeColorBack);
};

function changeColorBg() {
  document.body.style.backgroundColor = '#372e37';

  // document.getElementById('gitBg').style.color = '#736f72';
  // document.getElementById('linkedBg').style.color = '#736f72';
  // document.getElementById('aboutmeBg').style.color = '#736f72';
  // document.getElementById('highlightBg').style.color = '#736f72';
}

function changeColorBack() {
  document.body.style.backgroundColor = '';
  // document.getElementById('gitBg').style.color = '';
  // document.getElementById('linkedBg').style.color = '';
  // document.getElementById('aboutmeBg').style.color = '';
  // document.getElementById('highlightBg').style.color = '';
}
