let isRunning = false;
let intervalId = null;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(intervalId);
    document.getElementById("startStop").textContent = "Start";
  } else {
    intervalId = setInterval(updateTime, 1000);
    document.getElementById("startStop").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(intervalId);
  document.getElementById("startStop").textContent = "Start";
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateTime();
}

function updateTime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  const timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  document.getElementById("display").textContent = timeString;
}

function padZero(value) {
  return value.toString().padStart(2, "0");
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("reset").addEventListener("click", reset);
