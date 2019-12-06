
var happyBtn = document.querySelector('.happy');
var sillyBtn = document.querySelector('.silly');
var cryingBtn = document.querySelector('.crying');
var message = document.querySelector('.message');
var cryArray = ['All i can do is cry', 'Its a sad day', 'River of tears'];


cryingBtn.addEventListener('click', startCrying);



function startCrying() {
  message.innerText = 'All i can do is cry';

}
