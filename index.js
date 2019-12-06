var happyButton = document.querySelector('.happy');
var happyMessage = ['You go', 'Yay!', 'Woohoo!'];

happyButton.addEventListener('click', addHappyResponse);

function addHappyResponse() {
  var randomMessage = Math.floor(Math.random() * (happyMessage.length));
  document.querySelector('.message').innerHTML = happyMessage[randomMessage];
}

// fixing cursor
