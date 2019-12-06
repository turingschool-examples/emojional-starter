// // Happy Button
var happyButton = document.querySelector("#happyButton");
var happyMessage = document.querySelector("#message")

happyButton.addEventListener("click", addHappyMessage);

function addHappyMessage() {
  var happyMessage = ["Woo!", "Yay!", "You go!"];
  var randomHappy = happyMessage[Math.floor(Math.random()*happyMessage.length)];
  message.innerText = randomHappy;
}
// Silly Button
var sillyButton = document.querySelector("#sillyButton");
var sillyMessage = document.querySelector("#message")

sillyButton.addEventListener("click", addSillyMessage);

function addSillyMessage() {
  var sillyMessage = ["Same.", "If you say so!", "Great googly moogly!"];
  var randomSilly = sillyMessage[Math.floor(Math.random()*sillyMessage.length)];
  message.innerText = randomSilly;
}
// Crying Button
var cryingButton = document.querySelector("#cryingButton");
var cryingMessage = document.querySelector("#message")

cryingButton.addEventListener("click", addCryingMessage);

function addCryingMessage() {
  var cryingMessage = ["Let's hug it out!", "I've got a shoulder for you to cry on!", "Let it out!"];
  var randomCrying = cryingMessage[Math.floor(Math.random()*cryingMessage.length)];
  message.innerText = randomCrying;
}
