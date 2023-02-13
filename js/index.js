// Getting elements for future use
const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'green', 'aqua', 'yellow', 'black', 'peachpuff', 'yellowgreen', 'brown', 'hotpink', 'darkgray'];
// Initially, set background color to violet, when you open browser the background will be shown violet.
body.style.backgroundColor = 'violet';
// Function is created to generate random colors.
const changeBackground = (colorsArray) => {
  const colorIndex = Math.floor(Math.random() * colorsArray.length);
  // console.log(colorIndex);
  body.style.backgroundColor = colorsArray[colorIndex];
}
// Background will change every time when you click button.
button.addEventListener("click", changeBackground);