var message = document.querySelector(".message");
var happyEmoji = document.querySelector(".happy");
var sillyEmoji = document.querySelector(".silly");
var cryingEmoji = document.querySelector(".crying");

happyEmoji.addEventListener("click", showHappyResponse);
sillyEmoji.addEventListener("click", showSillyResponse);
cryingEmoji.addEventListener("click", showCryingResponse);

function showHappyResponse() {
  var responseMsg = `

     `;
      cardContainerParent.insertAdjacentHTML("afterbegin", responseMsg);
}

function showSillyResponse() {
  var responseMsg = `

     `;
      cardContainerParent.insertAdjacentHTML("afterbegin", responseMsg);
}

function showCryingResponse() {
  var responseMsg = `

     `;
      cardContainerParent.insertAdjacentHTML("afterbegin", responseMsg);
}
