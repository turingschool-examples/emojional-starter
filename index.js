const happyEmoji = document.getElementById('happy-emoji');
const emojiMessage = document.getElementById('emoji-message');

happyEmoji.addEventListener('click', function () {
  const responses = ["You go!", "Your smile just cheered me up!", "YAY!"];
  emojiMessage.innerText = responses[0];
})
