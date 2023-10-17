let inputRow = '';
let outputRow = '';
let leftParenthesesCount = 0;

function clearDisplay() {
    inputRow = '';
    outputRow = '';
    leftParenthesesCount = 0;
    updateDisplay();
}

function appendCharacter(character) {
    inputRow += character;
    if (character === '(') {
        leftParenthesesCount++;
    } else if (character === ')') {
        if (leftParenthesesCount > 0) {
            // inputRow += ')';
            leftParenthesesCount--;
        }
    }
    updateDisplay();
}

function toggleParentheses() {
    if (leftParenthesesCount === 0) {
        appendCharacter('(');
    } else {
        appendCharacter(')');
    }
}

function backspace() {
    if (inputRow.charAt(inputRow.length - 1) === '(') {
        leftParenthesesCount--;
    } else if (inputRow.charAt(inputRow.length - 1) === ')') {
        leftParenthesesCount++;
    }
    inputRow = inputRow.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        outputRow = eval(inputRow).toString();
        updateDisplay();
        inputRow = '0';
        leftParenthesesCount = 0;
    } catch (error) {
        outputRow = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('inputRow').innerText = inputRow;
    document.getElementById('outputRow').innerText = outputRow;
}

// Theme Toggle Function
function toggleTheme() {
    const body = document.body;
    const calculator = document.querySelector('.calculator');
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');

    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    calculator.classList.toggle('dark-mode');
    calculator.classList.toggle('light-mode');

    const isDarkMode = body.classList.contains('dark-mode');

    // Toggle visibility of moon and sun icons
    if (isDarkMode) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
    } else {
        moonIcon.style.display = 'inline-block';
        sunIcon.style.display = 'none';
    }
}