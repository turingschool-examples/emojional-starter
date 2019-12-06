var sadButtont = document.querySelector('.crying');
var message = document.querySelector('.message');




sadButton.addEventListener ('click', addSadMessage);

function addSadMessage (){
  console.log ('addSadMessage')
  var random = Math.floor(Math.random() * 4);
  if (random === 0){
      message.innerText = 'Do you want to talk?';
    } else if (random === 1) {
      message.innerText = 'Keep your head up';
    } else if (random === 2){
      message.innerText = 'What can I do?';
    } else {
      message.innerText = 'ERROR!!';
  };
};
