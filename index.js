//Define Variables needed for happyButton Functionality
const happyButton = document.querySelector(".happy");
const messageElement = document.querySelector('.message');
const happyMessage = ['You go!','Your smile just cheered me up!','YAY!'];

function showResponse(){
  //Show Response
  var i = Math.floor(Math.random()*happyMessage.length);
  messageElement.innerHTML = happyMessage[1];
}
happyButton.addEventListener('click',showResponse);
