const minutesInput = document.getElementById('minutes') as HTMLInputElement;
const timeDisplay = document.getElementById('time') as HTMLDivElement;
const startButton = document.getElementById('start-button') as HTMLButtonElement;
const pauseButton = document.getElementById('pause-button') as HTMLButtonElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;
const restartButton = document.getElementById('restart-button') as HTMLButtonElement;


let countdownInterval: number | null = null;
let minutes: number = 0;
let seconds: number = 0;
let isPaused: boolean = false;

function startCountdown(): void {
  minutes = parseInt(minutesInput.value);

  if (isNaN(minutes)) {
    alert('Please give a number');
    return;
  }

  seconds = minutes * 60;

  countdownInterval = setInterval(() => {
    if (!isPaused) {
      seconds--;
      const displayMinutes = Math.floor(seconds / 60);
      const displaySeconds = seconds % 60;

    timeDisplay.textContent = `${displayMinutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;

      if (seconds <= 0) {
        clearInterval(countdownInterval!);
        alert('Countdown abgelaufen!');
      }
    }
  }, 1000);

  startButton.disabled = true;
  pauseButton.disabled = false;
  restartButton.disabled = false;
  resetButton.disabled = false;
}

document.getElementById('start-button')!.addEventListener('click', startCountdown);

function pauseCountdown(): void {
  isPaused = true;
  pauseButton.textContent = 'Resume Countdown';
  pauseButton.removeEventListener('click', pauseCountdown);
  pauseButton.addEventListener('click', resumeCountdown);
}

function resumeCountdown(): void {
  isPaused = false;
  pauseButton.textContent = 'Pause Countdown';
  pauseButton.removeEventListener('click', resumeCountdown);
  pauseButton.addEventListener('click', pauseCountdown);
}

document.getElementById('pause-button')!.addEventListener('click', pauseCountdown);



function restartCountdown(): void {
  clearInterval(countdownInterval!)
  startCountdown()
 
}

document.getElementById('restart-button')!.addEventListener('click', restartCountdown);

function resetCountdown(): void {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
  
  minutesInput.value = '';
  timeDisplay.textContent = '00:00';
  startButton.disabled = false;
  pauseButton.disabled = true;
  restartButton.disabled = true;
  resetButton.disabled = true;
}
document.getElementById('reset')!.addEventListener('click', resetCountdown);




