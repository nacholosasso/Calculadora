let currentInput = ''; // Variable para almacenar la entrada actual
let previousInput = ''; // Variable para almacenar el valor anterior (para operaciones)
let operator = ''; // Variable para almacenar el operador seleccionado

// Función para agregar un número a la pantalla
function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

// Función para agregar un operador a la pantalla
function appendOperator(op) {
    if (currentInput === '') return; // Evita agregar operador si no hay número
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Función para limpiar la pantalla
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '';
}

// Función para eliminar el último carácter de la entrada
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
}

// Función para calcular el resultado
function calculateResult() {
    if (currentInput === '' || previousInput === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
    }
    currentInput = result.toString();
    document.getElementById('display').value = currentInput;
}
