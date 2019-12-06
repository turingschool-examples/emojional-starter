var happy = document.querySelector('.happy');
var silly = document.querySelector('.silly');
var crying = document.querySelector('.crying');
var message = document.querySelector('.message');
var repeat
var nextNum;

function randomSaying() {
  return Math.floor(Math.random() * 3);
}

function blockRepeat() {
  repeat = randomSaying();
  if (repeat === nextNum) {
    blockRepeat();
  }else {
    nextNum = repeat;
  }
  return nextNum;
}

function handleHappy(i) {
  i = blockRepeat();
  var happySayings = ["You go!", "Your smile just cheered me up!", "YAY!"]
  message.innerText = happySayings[i]
}

function handleSilly(i) {
  i = blockRepeat();
  var sillySayings = ['Interesting response','Sounds ... good?', 'Me too.']
  message.innerText = sillySayings[i]

}

function handleCrying(i) {
  i = blockRepeat();
  var cryingSayings = ['Do you want to talk?', 'Keep your head up', 'We can cry together!']
  message.innerText = cryingSayings[i] ;
}



happy.addEventListener('click', handleHappy);
silly.addEventListener('click', handleSilly);
crying.addEventListener('click', handleCrying);
