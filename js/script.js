`use strict`;
// variables
const answerNo = document.querySelector(`.defeat`);
const test = document.querySelector(`.test`);

// rand number
let randNumT;
let randNumL;
getNum = function () {
  randNumT = Math.trunc(Math.random() * 88) + 1;
  randNumL = Math.trunc(Math.random() * 88) + 1;
  answerNo.style.right = `${randNumT}%`;
  answerNo.style.top = `${randNumL}%`;
};
getNum();
answerNo.addEventListener(`click`, getNum);
