// Variables to store calculator data
let currentValue = '';
let operator = '';
let result = null;

// Function to update the display
function updateDisplay() {
    document.getElementById('display').value = currentValue;
}

// Function to append a digit or operator to the current value
function appendToDisplay(value) {
    currentValue += value;
    updateDisplay();
}

// Function to clear the display
function clearDisplay() {
    currentValue = '';
    operator = '';
    result = null;
    updateDisplay();
}

// Function to perform calculations
function calculateResult() {
    if (currentValue === '') {
        return; // No calculation to perform
    }

    if (result !== null) {
        // If there's a previous result, use it as the first operand
        currentValue = result + operator + currentValue;
    }

    try {
        result = eval(currentValue);
        currentValue = result.toString();
        updateDisplay();
    } catch (error) {
        currentValue = 'Error';
        updateDisplay();
    }
}

// Add event listeners for digit buttons
document.querySelectorAll('.digit').forEach(button => {
    button.addEventListener('click', () => {
        appendToDisplay(button.textContent);
    });
});

// Add event listeners for operator buttons
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        calculateResult();
    });
});

// Add event listener for the equal button
document.querySelector('.equal').addEventListener('click', () => {
    calculateResult();
});

// Add event listener for the clear button
document.querySelector('.clear').addEventListener('click', () => {
    clearDisplay();
});

// Initialize the display
updateDisplay();