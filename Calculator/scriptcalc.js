const display = document.querySelector('.calc-display');
const keypad = document.querySelector('.calc-keypad');
window.addEventListener('keydown', displayResult);
keypad.addEventListener('click', displayResult);
let displayValue = 0;
let operandOne = 0;
let operandTwo = 0;
let operator = '';


function handleInput(input) {
  if (!isNaN(input)) {
    return input;
  }
  else if (input === 'add' || input === '+'){
    displayValue = 'it is adding'; //input;
    return displayValue;
  }
  else {
    return input;
  }
}

function displayResult(event) {
  let input = event.key || event.target.value;
  let value = handleInput(input);
  display.innerHTML = value;
}

