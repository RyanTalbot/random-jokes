const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
let punchline;

async function getJoke() {
  const jokePromise = await fetch(
    'https://official-joke-api.appspot.com/jokes/programming/random'
  );
  const joke = await jokePromise.json();

  setupDiv.innerHTML = joke[0].setup;
  punchline = joke[0].punchline;

  punchlineBtn.classList.toggle('hidden');
  newJokeBtn.classList.toggle('hidden');
}
getJoke();
