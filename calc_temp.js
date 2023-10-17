document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');
    let isLeftParanthesis = 

    let currentInput = '';
    
    function updateDisplay() {
        inputElement.innerText = currentInput;
        outputElement.innerText = '';
    }

    function clearAll() {
        currentInput = '';
        updateDisplay();
    }

    function backspace() {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }

    function bracket() {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }

    function calculate() {
        try {
            const result = eval(currentInput);
            outputElement.innerText = result;
        } catch (error) {
            outputElement.innerText = 'Error';
        }
    }

    function handleButtonClick(value) {
        switch (value) {
            case 'AC':
                clearAll();
                break;
            case 'backspace':
                backspace();
                break;
            case '=':
                calculate();
                break;
            case '()':
                bracket();
                break;
            default:
                currentInput += value;
                updateDisplay();
        }
    }

    // const buttons = ['AC', '()', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', 'backspace', '='];
    const buttons = ['AC', '()', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', 'backspace', '='];
    const buttonsContainer = document.querySelector('.buttons');

    buttons.forEach(value => {
        const button = document.createElement('button');
        button.innerText = value;
        button.classList.add('btn', 'btn-outline-dark', 'm-1', 'col-md-3', 'col-3');
        button.addEventListener('click', () => handleButtonClick(value));
        buttonsContainer.appendChild(button);
    });
});
