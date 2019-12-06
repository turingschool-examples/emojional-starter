// Variables
var happyFaceBtn = document.querySelector('.happy');
// var sillyFaceBtn = document.querySelector('.silly');
// var cryingFaceBtn = document.querySelector('.crying');
var message = document.querySelector('.message');

// Event Listeners
happyFaceBtn.addEventListener('click', happyFace);
sillyFaceBtn.addEventListener('click', sillyFace);
// cryingFaceBtn.addEventListener('click', cryingFace);

// Functions
function happyFace() {
  var prompts = ['YAY!', 'You go!', 'Your smile just cheered me up.'];

  message.innerHTML = prompts[randNum(3)];
}

// function sillyFace() {
//   var prompts = ['Me too.', 'Sounds... good?', 'Ok!', 'Interesting response'];
//
//   message.innerHTML = prompts[randNum(4)];
// }


function randNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
