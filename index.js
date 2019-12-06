var happyButton = document.querySelector(".happy");
var sillyButton = document.querySelector(".silly");
var cryingButton = document.querySelector(".crying");
var message = document.querySelector(".message")
var happyMessages = ["You go!", "Your smile just cheered me up!", "YAY!"];
var sillyMessages = ["Interesting response...", "Sounds ... good?", "Me too."];
var cryingMessages = ["Do you want to talk?", "Keep your head up", "We can cry together!", "What can I do?"];

happyButton.addEventListener("click", showHappyMsg);
sillyButton.addEventListener("click", showSillyMsg);
cryingButton.addEventListener("click", showCryingMsg);

function showHappyMsg() {
  randomIndex = Math.floor(Math.random() * happyMessages.length);
  message.innerHTML = happyMessages[randomIndex];
  console.log(randomIndex);
}
