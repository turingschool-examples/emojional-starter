var happyButton = document.querySelector("#happyButton");
var response = document.querySelector("#message")

happyButton.addEventListener("click", addHappyMessage);

function addHappyMessage() {
  var happyMessage = "Woo!";
  message.innerText = happyMessage;
}
console.log("buttonclick", addHappyMessage);
