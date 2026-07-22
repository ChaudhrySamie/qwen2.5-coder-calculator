let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    if (currentInput.length < 10) { // Limit input length to avoid overflow
        currentInput += number;
        updateDisplay();
    }
}

function appendOperator(op) {
    if (firstOperand === null && currentInput !== '') {
        firstOperand = parseFloat(currentInput);
    } else if (operator) {
        calculate();
        firstOperand = result;
    }
    operator = op;
    currentInput = '';
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    display.value = '0';
}

function calculate() {
    let result;
    const secondOperand = parseFloat(currentInput);

    if (operator === '+') {
        result = firstOperand + secondOperand;
    } else if (operator === '-') {
        result = firstOperand - secondOperand;
    } else if (operator === '*') {
        result = firstOperand * secondOperand;
    } else if (operator === '/') {
        if (secondOperand !== 0) {
            result = firstOperand / secondOperand;
        } else {
            display.value = 'Error';
            return;
        }
    }

    currentInput = result.toString();
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput === '' ? '0' : currentInput;
}
