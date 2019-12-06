// Happy Button
var happyButton = document.querySelector("#happyButton");
var response = document.querySelector("#message")

happyButton.addEventListener("click", addHappyMessage);

function addHappyMessage() {
  var happyMessage = ["Woo!", "Yay!", "You go!"];
  var randomHappy = happyMessage[Math.floor(Math.random()*happyMessage.length)];
  message.innerText = randomHappy;
}
// Silly Button
var sillyButton = document.querySelector("#happyButton");
var response = document.querySelector("#message")

happyButton.addEventListener("click", addHappyMessage);

function addHappyMessage() {
  var happyMessage = ["Woo!", "Yay!", "You go!"];
  var randomHappy = happyMessage[Math.floor(Math.random()*happyMessage.length)];
  message.innerText = randomHappy;

// console.log("buttonclick", randomHappy);


// let randomHappy = Math.floor(Math.random() * happyMessage.length);
// return happyMessage = ["Woo!", "You go!", "Yay!"];
