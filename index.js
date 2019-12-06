var sillyButton = document.querySelector('.silly');
var message = document.querySelector('.message');




sillyButton.addEventListener ('click', addSillyMessage);

function addSillyMessage (){
  console.log ('addSillyMessage')
  var random = Math.floor(Math.random() * 3);
  if (random === 0){
      message.innerText = 'Interesting response';
    } else if (random === 1) {
      message.innerText = 'Sounds.....good?!';
    } else if (random === 2){
      message.innerText = 'Me too';
    } else {
      message.innerText = 'ERROR!!';
  };
};
