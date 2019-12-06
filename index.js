var happyButton = document.querySelector('.happy');
var happyMessage = ['You go', 'Yay!', 'Woohoo!'];
var sillyButton = document.querySelector('.silly');
var sillyMessage = ['Interesting response', 'Sounds...good?', 'Me too.'];
var cryingButton = document.querySelector('.crying');
var cryingMessage = ['Do you want to talk?', 'Keep your head up', 'We can cry together!', 'What can I do?'];

happyButton.addEventListener('click', addHappyResponse);
sillyButton.addEventListener('click', addSillyResponse);
cryingButton.addEventListener('click', addCryingResponse);

function addHappyResponse() {
  var randomMessage = Math.floor(Math.random() * (happyMessage.length));
  document.querySelector('.message').innerHTML = happyMessage[randomMessage];
}

function addSillyResponse() {
  var randomMessage = Math.floor(Math.random() * (sillyMessage.length));
  document.querySelector('.message').innerHTML = sillyMessage[randomMessage];
}

function addCryingResponse() {
  var randomMessage = Math.floor(Math.random() * (cryingMessage.length));
  document.querySelector('.message').innerHTML = cryingMessage[randomMessage];
}

// fixing cursor
