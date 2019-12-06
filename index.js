var message = document.querySelector('.message');
var happyButton = document.querySelector('.happy');
var sillyButton = document.querySelector('.silly');
var cryingButton = document.querySelector('.crying');

happyButton.addEventListener('click', displayHappyMessage);

function displayHappyMessage() {
  message.innerText = "Happy Message";
}
