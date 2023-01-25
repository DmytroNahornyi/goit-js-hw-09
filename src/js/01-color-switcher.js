const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');

stopBtnEl.disabled = true;
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtnEl.addEventListener('click', () => {
    startBtnEl.disabled = true;
    stopBtnEl.disabled = false;

    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
});

stopBtnEl.addEventListener('click', () => {
    clearInterval(timerId);
    startBtnEl.disabled = false;
    stopBtnEl.disabled = true;
})