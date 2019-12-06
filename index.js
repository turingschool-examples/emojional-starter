var happyBtn = document.querySelector('.happy');
var happyMsgs = ['You go!', 'Your smile just cheered me up!', 'YAY!'];
var msgDisplay = document.querySelector('.message');
var sillyMsgs = ['Interesting response', 'Sounds ... good?', 'Me too.'];
var sadMsgs = ['Do you want to talk?', 'Keep your head up', 'We can cry together!',
'What can I do?'];
var sadBtn = document.querySelector('.crying');
var sillyBtn = document.querySelector('.silly');
var indx = 0;

happyBtn.addEventListener('click', () => {randomMsg(happyMsgs, 2, 0)});
sillyBtn.addEventListener('click', () => {randomMsg(sillyMsgs, 2, 0)});
sadBtn.addEventListener('click', () => {randomMsg(sadMsgs, 3, 0)});

function makeRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomMsg(array, max, min) {
  var newIndx = indx;
  while (newIndx === indx) {
    newIndx = makeRandomNumber(max, min);
  }
  indx = newIndx;
  msgDisplay.innerText = array[indx];
}
