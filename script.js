const display = document.getElementById("display");
const expression = document.getElementById("expression");

let currentInput = "";

function updateDisplay() {
  expression.textContent = currentInput;

  if (currentInput === "") {
    display.value = "0";
  } else {
    display.value = currentInput;
  }
}

function appendValue(value) {
  currentInput += value;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    expression.textContent = currentInput;
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
}

function toggleSign() {
  if (currentInput === "") return;

  if (!isNaN(currentInput)) {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
  }
}

updateDisplay();