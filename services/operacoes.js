//Funções Matemáticas Auxiliares

function verificaPar(num) {
    if (isNaN(num))
        throw new Error("Insira um número válido");

    return (num % 2 == 0);
}

function somaNum(num1, num2) {
    if (isNaN(num1) || isNaN(num2))
        throw new Error("Insira apenas números válidos");

    return (num1 + num2);
}

function subtrairNum(num1, num2) {
    if (isNaN(num1) || isNaN(num2))
        throw new Error("Insira apenas números válidos");

    return (num1 - num2);
}

function multiplicarNum(num1, num2) {
    if (isNaN(num1) || isNaN(num2))
        throw new Error("Insira apenas números válidos");

    return (num1 * num2);
}

function divisaoNum(num1, num2) {
    if (isNaN(num1) || isNaN(num2))
        throw new Error("Insira apenas números válidos");

    if (num2 == 0)
        throw new Error("Não é possível dividir por zero");

    return (num1 / num2);
}

function verificaMaior(V) {
    V.forEach((idade) => {
        if (isNaN(idade) || idade < 0)
            throw new Error("Insira apenas idades válidas");
    })

    let maior = V[0];

    for (let i = 1; i < V.length; i++)
        if (V[i] > maior)
            maior = V[i];

    return (maior)
}

function verificaMenor(V) {
    let menor = V[0];

    V.forEach((idade) => {
        if (isNaN(idade) || idade < 0)
            throw new Error("Insira apenas idades válidas");
        else if (idade < menor)
            menor = idade;
    })

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