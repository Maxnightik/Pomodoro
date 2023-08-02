import { initConrol } from "./control.js";
import { state } from "./state.js";

const initPomodoro = () => {
  initConrol();

  state.activeTodo = {
    id: "default",
    pomodoro: 3,
    title: "Помодоро",
  };
};

initPomodoro();
