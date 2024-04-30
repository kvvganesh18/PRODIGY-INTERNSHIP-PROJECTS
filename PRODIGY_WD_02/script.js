let timer;
let running = false;
let time = 0;
let lapCounter = 1;

function startStop() {
  if (running) {
    clearInterval(timer);
    document.getElementById('startStop').innerText = 'Start';
    running = false;
  } else {
    timer = setInterval(updateDisplay, 10);
    document.getElementById('startStop').innerText = 'Stop';
    running = true;
  }
}

function reset() {
  clearInterval(timer);
  document.getElementById('startStop').innerText = 'Start';
  running = false;
  time = 0;
  lapCounter = 1;
  document.getElementById('display').innerText = '00:00:00';
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  const lapTime = formatTime(time);
  const lapItem = document.createElement('li');
  lapItem.innerText = `Lap ${lapCounter}: ${lapTime}`;
  document.getElementById('laps').appendChild(lapItem);
  lapCounter++;
}

function updateDisplay() {
  time += 10;
  const display = formatTime(time);
  document.getElementById('display').innerText = display;
}

function formatTime(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const millisecondsPart = Math.floor((milliseconds % 1000) / 10);
  return `${padTime(minutes)}:${padTime(seconds)}:${padTime(millisecondsPart)}`;
}

function padTime(time) {
  return (time < 10 ? '0' : '') + time;
}
