const happyEmoji = document.getElementById('happy-emoji');
const sillyEmoji = document.getElementById('silly-emoji');
const cryingEmoji = document.getElementById('crying-emoji');

const emojiMessage = document.getElementById('emoji-message');

happyEmoji.addEventListener('click', function () {
  const responses = ["You go!", "Your smile just cheered me up!", "YAY!"];
  let randIndex = Math.floor(Math.random() * 3);
  emojiMessage.innerText = responses[randIndex];
})
