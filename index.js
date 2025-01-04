const express = require('express');
const mathFunctions = require('./math');
const app = express();
const porta = 3000;

// 0-soma.js
app.get('/soma', (req, res) => {
    const soma = Number(req.query.num1) + Number(req.query.num2);

    res.send(`Soma: ${soma}`);
});

// 01-subtrair.js
app.get('/sub', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const sub = num1 - num2;

    res.send(`${num1} - ${num2} = ${sub}`)
});

// 02-par.js
app.get('/par', (req, res) => {
    const num = Number(req.query.num);

    if (mathFunctions.verificaPar(num))
        res.send(`${num} é Par`);
    else
        res.send(`${num} é Ímpar`);

});

// 04-calculadora.js
app.get('/calculadora/:sinal', (req, res) => {
    const sinal = req.params.sinal;
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    switch (sinal) {
        case "+":
            res.send(`${num1} + ${num2} = ${mathFunctions.somaNum(num1, num2)}`);
            break;

        case "-":
            res.send(`${num1} - ${num2} = ${mathFunctions.subtrairNum(num1, num2)}`);
            break;

        case ":":
            res.send(`${num1} / ${num2} = ${mathFunctions.divisaoNum(num1, num2)}`);
            break;

        case "*":
            res.send(`${num1} * ${num2} = ${mathFunctions.multiplicarNum(num1, num2)}`);
            break;

        default:
            res.send("Operação com Sinal Inválido");
    }
})

//Listando a porta em que o servidor vai rodar
app.listen(porta, () => {
    console.log(`Servidor Rodando na porta ${porta}`);
});