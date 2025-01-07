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

function verificaMaior(V) {
    let maior = V[0];

    for (let i = 1; i < V.length; i++)
        if (V[i] > maior)
            maior = V[i];

    return (maior)
}

function verificaMenor(V) {
    let menor = V[0];

    for (let i = 1; i < V.length; i++)
        if (V[i] < menor)
            menor = V[i];

    return (menor)
}

function verificaPrimo(num) {
    let cont = 0

    for (let i = 1; i <= num; i++) {
        if (num % i == 0)
            cont++
    }

    return ((cont <= 2) && (num != 1));
}

module.exports = {
    verificaPar,
    somaNum,
    subtrairNum,
    multiplicarNum,
    divisaoNum,
    verificaMaior,
    verificaMenor,
    verificaPrimo
};