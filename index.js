
var message = document.querySelector(".message");
var happyButton = document.querySelector(".happy");
var happyResponses = [
  "You go!",
  "Your smile just cheered me up!",
  "YAY!"
];

happyButton.addEventListener("click", messageHappy);

function messageHappy() {
  message.innerText = happyResponses[0];
}