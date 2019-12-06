var happy = document.querySelector('.happy')
var silly = document.querySelector('.silly')
var crying = document.querySelector('.crying')
var message = document.querySelector('.message')


function randomSaying() {
  Math.ceil(Math.random() * 3);
}

function handleHappy(i) {
  i = randomSaying()
  console.log('im in');


}



happy.addEventListener('click', handleHappy)
