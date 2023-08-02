import { state } from "./state.js";
import { showTime, startTimer } from "./timer.js";

const btnStart = document.querySelector(".control__btn_start");
const btnStop = document.querySelector(".control__btn_stop");

const stop = () => {
  clearTimeout(state.temerId);
  state.isActive = false;
  btnStart.textContent = " Старт";
  state.timeLeft = state[state.status] * 60;
  showTime(state.timeLeft);
};

export const initConrol = () => {
  btnStart.addEventListener("click", () => {
    if (state.isActive) {
      clearTimeout(state.temerId);
      state.isActive = false;
      btnStart.textContent = " Старт";
    } else {
      state.isActive = true;
      btnStart.textContent = " Пауза";
      startTimer();
    }
  });

  btnStop.addEventListener("click", stop);
  showTime(state.timeLeft);
};
