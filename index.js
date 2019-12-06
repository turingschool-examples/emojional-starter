//Define Variables needed for happyButton Functionality
const happyButton = document.querySelector(".happy");
const messageElement = document.querySelector('.message');
const happyMessage = ['You go!','Your smile just cheered me up!','YAY!'];

function showResponse(){
  //Show Response

  messageElement.innerHTML = happyMessage[1];
}
happyButton.addEventListener('click',showResponse);
