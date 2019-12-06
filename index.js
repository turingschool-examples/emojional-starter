var happyButton = document.querySelector('.happy');
var message = document.querySelector('.message');




happyButton.addEventListener ('click', addHappyMessage);

function addHappyMessage (){
  console.log ('addHappyMessage')
  var random = Math.floor(Math.random() * 3);
  if (random === 0){
      message.innerText = 'You go!';
    } else if (random === 1) {
      message.innerText = 'Your smile just cheered me up!';
    } else if (random === 2){
      message.innerText = 'YAY!';;
    } else {
      message.innerText = 'ERROR!!';
  };
};
