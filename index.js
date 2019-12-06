var message = document.querySelector(".message");
var happyEmoji = document.querySelector(".happy");
var sillyEmoji = document.querySelector(".silly");
var cryingEmoji = document.querySelector(".crying");

happyEmoji.addEventListener("click", showHappyResponse);
sillyEmoji.addEventListener("click", showSillyResponse);
cryingEmoji.addEventListener("click", showCryingResponse);

function showHappyResponse() {
  var happyResponse = `Your smile just cheered me up.`;
  message.innerText = happyResponse;
}

function showSillyResponse() {
  var sillyResponse = `Ok!`;
  message.innerText = sillyResponse;
}

function showCryingResponse() {
  var cryingResponse = `Keep your head up.`;
  message.innerText = cryingResponse;
