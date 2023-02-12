// Getting elements for future use
const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'green', 'aqua', 'yellow', 'black', 'peachpuff', 'yellowgreen', 'brown', 'hotpink', 'darkgray'];
// Initially, set background color to violet, when you open browser the background will be shown violet.
body.style.backgroundColor = 'violet';
// Function is created to generate random colors.
const changeBackground = () => {
  const colorIndex = Math.floor(Math.random() * colors.length);
  // console.log(colorIndex);
  body.style.backgroundColor = colors[colorIndex];
}
// Background will change every time when you click button.
button.addEventListener("click", changeBackground);