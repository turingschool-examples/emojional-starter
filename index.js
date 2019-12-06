var happyButton = document.querySelector("#happy");
var quotes = ["You go!", "It's a great day", "It's good"]

happyButton.addEventListener("click", showHappyMessages);
console.log('cant get it');

// click on button and get message
function showHappyMessages() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("displayed-message").innerHTML = quotes[randomNumber];
}























//
