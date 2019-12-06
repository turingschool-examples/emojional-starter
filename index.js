
var happy = document.querySelector(".happy");
var response = document.querySelector("h2");
happy.addEventListener('click', happyResponse);
function happyResponse() {
  var happyResponse = `Well that's just peachy`;
  response.innerText = happyResponse;
}
