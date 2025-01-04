//Funções Matemáticas Auxiliares

function verificaPar(num) {
    return (num % 2 == 0);
}

function somaNum(num1, num2) {
    return (num1 + num2);
}

function subtrairNum(num1, num2) {
    return (num1 - num2);
}

function multiplicarNum(num1, num2) {
    return (num1 * num2);
}

function divisaoNum(num1, num2) {
    return (num1 / num2);
}

module.exports = { verificaPar, somaNum, subtrairNum, multiplicarNum, divisaoNum };