const WORK_TIME = 2;
const BREAK_TIME = 0.5;
const RELAX_TIME = 1;

export const state = {
  work: WORK_TIME,
  break: BREAK_TIME,
  relax: RELAX_TIME,
  status: "work",
  count: 4,
  timeLeft: WORK_TIME * 60,
  isActive: false,
  temerId: 0,
};
