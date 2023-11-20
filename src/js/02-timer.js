import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const startBtnEl = document.querySelector('[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      // alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtnEl.disabled = true;
    } else {
      startBtnEl.disabled = false;
    }
  },
};
const datePicker = flatpickr(
  document.querySelector('#datetime-picker'),
  options
);

if (datePicker.selectedDates[0] < new Date()) {
  startBtnEl.disabled = true;
}

startBtnEl.addEventListener('click', () => {
  const selectedDate = datePicker.selectedDates[0];
  let timeRemaining = selectedDate - new Date();

  function updateTimer() {
    const time = convertMs(timeRemaining);

    document.querySelector('[data-days]').textContent = addLeadingZero(
      time.days
    );
    document.querySelector('[data-hours]').textContent = addLeadingZero(
      time.hours
    );
    document.querySelector('[data-minutes]').textContent = addLeadingZero(
      time.minutes
    );
    document.querySelector('[data-seconds]').textContent = addLeadingZero(
      time.seconds
    );

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
    } else {
      timeRemaining -= 1000;
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);

  startBtnEl.setAttribute('disabled', true); //блокуємо кнопку від повторного запуску
});
