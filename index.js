var smileyButton = document.querySelector('.happy')
var messageSpace = document.querySelector('.message')
var sillyButton = document.querySelector('.silly')
var cryingButton = document.querySelector('.crying')



smileyButton.addEventListener('click', happyResponse)
  function happyResponse() {
  var responses1 = ['dope!', 'nice dude!', 'look at you!'];
  for(var i = 0; i < responses1.length; i++)
  messageSpace.innerText += responses1[i]
 }

sillyButton.addEventListener('click', sillyResponse)
  function sillyResponse() {
  var responses2 = ['this shit crazy!', 'whaaaaat!', 'kind of fun'];
  for(var i = 0; i < responses1.length; i++)
  messageSpace.innerText += responses2[i]
}

cryingButton.addEventListener('click', sadResponse)
  function sadResponse() {
  var responses3 = ['so slose', 'dont be sad!', 'always nest time!'];
  for(var i = 0; i < responses1.length; i++)
  messageSpace.innerText += responses3[i]
}
