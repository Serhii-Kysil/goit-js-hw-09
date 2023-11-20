const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let colorChangeInterval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function defaultBtnStatus() {
  startButton.disabled = false;
  stopButton.disabled = true;
}
defaultBtnStatus();

startButton.addEventListener('click', function () {
  this.disabled = true;
  stopButton.disabled = false;

  colorChangeInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopButton.addEventListener('click', function () {
  this.disabled = true;
  startButton.disabled = false;

  clearInterval(colorChangeInterval);
});
