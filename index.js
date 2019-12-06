var happyBtn= document.querySelector('.happy');
var sillyBtn= document.querySelector('.silly');
var cryingBtn= document.querySelector('.crying');
var messageSlot= document.querySelector('.message');

var happyResponses= ['You go!', 'Your smile just cheered me up!', 'YAY!'];

var sillyResponses= ['Interesting response', 'Sounds ... good?', 'Me too.'];

var cryingResponses= ['Do you want to talk?', 'Keep your head up', 'We can cry together!', 'What can I do?']


var index2= Math.floor(Math.random() * sillyResponses.length);
var index3= Math.floor(Math.random() * cryingResponses.length);

happyBtn.addEventListener('click', generateHappyResponse);
// sillyBtn.addEventListener('click', generateResponse);
// cryingBtn.addEventListener('click', generateResponse);

function generateHappyResponse(event){
  var index1= Math.floor(Math.random() * happyResponses.length);

    messageSlot.innerText= happyResponses[index1];
  // } else if (event.classList.contains('silly')){
  //   messageSlot.innerText= sillyResponses[index2];

}
