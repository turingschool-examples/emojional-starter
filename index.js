// Variables
var happyFaceBtn = document.querySelector('.happy');
var message = document.querySelector('.message');

// Event Listeners
happyFaceBtn.addEventListener('click', happyFace);

// Functions
function happyFace() {
  var prompts = ['YAY!', 'You go!', 'Your smile just cheered me up.'];

  message.innerHTML = prompts[randNum()];
}

function randNum() {
  return Math.floor(Math.random() * Math.floor(3));
}
