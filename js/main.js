window.addEventListener('mousemove', cursor);

window.onload = function () {
  document.getElementById('changeBg').addEventListener('mouseover', changeColorBg);
  document.getElementById('changeBg').addEventListener('mouseout', changeColorBack);
  mouseCursor = document.querySelector('.cursor');
  countDownToGraduation();
};

function changeColorBg() {
  document.getElementById('gitBg').style.color = '#dce1e3';
  document.getElementById('linkedBg').style.color = '#dce1e3';
}

function changeColorBack() {
  document.getElementById('gitBg').style.color = '';
  document.getElementById('linkedBg').style.color = '';
}

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

function countDownToGraduation() {
  let countDownDate = new Date('May 20, 2022 16:00:00').getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countDown').innerHTML =
      '<strong>Graduation: </strong>' +
      days +
      'd ' +
      hours +
      'h ' +
      minutes +
      'm ' +
      seconds +
      's ';

    if (distance < 0) {
      clearInterval(x);
      document.getElementById('countDown').innerHTML = 'Open for business';
    }
  }, 1000);
}
