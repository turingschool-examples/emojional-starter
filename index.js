var happyMsgs = ['You go!', 'Your smile just cheered me up!', 'YAY!'];

var happyBtn = document.querySelector('.happy');
var msgDisplay = document.querySelector('.message')

happyBtn.addEventListener('click', randomHappyMsg)

function makeRandomNumber() {
  return Math.floor(Math.random() * (2 + 1));
}

function randomHappyMsg() {
  msgDisplay.innerText = happyMsgs[makeRandomNumber()];
}
