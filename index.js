var happy = document.querySelector('.happy');
var silly = document.querySelector('.silly');
var crying = document.querySelector('.crying');
var message = document.querySelector('.message');
var nextNum;
var repeat;

function randomSaying() {
  return Math.ceil(Math.random() * 3);
}

function blockRepeat() {
  var repeat = randomSaying();
  if (repeat === nextNum) {
    blockRepeat();
  }else {
    nextNum = repeat;
  }
  return nextNum;
}

function handleHappy(i) {
  i = blockRepeat();
  if (i === 1) {
    message.innerText = 'You go!';
  }else if (i === 2) {
    message.innerText = 'Your smile just cheered me up!';
  }else if (i === 3) {
    message.innerText = 'YAY!';
  }

}

function handleSilly(i) {
  i = blockRepeat();
  if (i === 1) {
    message.innerText = 'Interesting response';
  }else if (i === 2) {
    message.innerText = 'Sounds ... good?';
  }else if (i === 3) {
    message.innerText = 'Me too.';
  }

}

function handleCrying(i) {
  i = blockRepeat();
  if (i === 1) {
    message.innerText = 'Do you want to talk?';
  }else if (i === 2) {
    message.innerText = 'Keep your head up';
  }else if (i === 3) {
    message.innerText = 'We can cry together!';
  }

}



happy.addEventListener('click', handleHappy);
silly.addEventListener('click', handleSilly);
crying.addEventListener('click', handleCrying);
