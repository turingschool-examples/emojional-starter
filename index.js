var happy = document.querySelector('.happy')
var silly = document.querySelector('.silly')
var crying = document.querySelector('.crying')
var message = document.querySelector('.message')


function randomSaying() {
  Math.ceil(Math.random() * 3);
}

function handleHappy(i) {
  i = randomSaying()
  if (i === 1) {
    message.innerText = 'You go!'
  }else if (i === 2) {
    message.innerText = 'Your smile just cheered me up!'
  }else if (i === 3) {
    message.innerText = 'YAY!''
  }

}



happy.addEventListener('click', handleHappy)
