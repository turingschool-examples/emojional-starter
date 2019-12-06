var smileyButton = document.querySelector('.happy')
var messageSpace = document.querySelector('.message')
var sillyButton = document.querySelector('.silly')
var cryingButton = document.querySelector('.crying')



smileyButton.addEventListener('click', happyResponse);
function happyResponse() {
  var responses1 = ['dope!', 'nice dude!', 'look at you!'];
  var randomNumber = Math.floor(Math.random()*3)
  if(responses1[randomNumber] === messageSpace.innerText){
    happyResponse();
    } else {
      messageSpace.innerText = responses1[randomNumber]
    }
};

 sillyButton.addEventListener('click', sillyResponse);
function sillyResponse() {
   var responses2 = ['whoa', 'crazy!', 'blank'];
   var randomNumber = Math.floor(Math.random()*3)
   messageSpace.innerText = responses2[randomNumber]
 };

  cryingButton.addEventListener('click', sadResponse);
  function sadResponse() {
    var responses3 = ['oh no', 'better luck!', 'its okay'];
    var randomNumber = Math.floor(Math.random()*3)
    messageSpace.innerText = responses3[randomNumber]
  };
