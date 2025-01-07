const express = require('express');
const mathFunctions = require('./math');
const app = express();
const porta = 3000;

//Path = Parametro de Rota;
//Query = Parametro de Consulta;

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
});

// 05-notas.js
app.get('/notas', (req, res) => {
    const soma = Number(req.query.nota1) + Number(req.query.nota2) + Number(req.query.nota3);

    const media = soma / 3;

    if (media < 6)
        res.send("Abaixo da Média");
    else if (media === 6)
        res.send("Na média");
    else
        res.send("Acima da Média");
});

// 06-contPares.js
app.get('/contPar', (req, res) => {
    const n = Number(req.query.num);
    let contPar = 0;
    let contImpar = 0;

    for (let i = 1; i <= n; i++)
        if (mathFunctions.verificaPar(i))
            contPar++;
        else
            contImpar++;

    res.send(`Quantidade de Pares: ${contPar} <br> Quantidade de Impares: ${contImpar}`);

})

// 07-maiorIdade (Verifica a maior idade)
app.get('/maiorIdade', (req, res) => {
    const V = [
        Number(req.query.idade1),
        Number(req.query.idade2),
        Number(req.query.idade3),
        Number(req.query.idade4),
        Number(req.query.idade5)
    ];

    const maior = mathFunctions.verificaMaior(V);

    res.send(`Maior Idade: ${maior}`);

});
// (Verifica a menor idade)
app.get('/menorIdade', (req, res) => {
    const V = [
        Number(req.query.idade1),
        Number(req.query.idade2),
        Number(req.query.idade3),
        Number(req.query.idade4),
        Number(req.query.idade5)
    ];

    const menor = mathFunctions.verificaMenor(V);

    res.send(`Menor Idade: ${menor}`);

});

// 08-tabuada.js
app.get('/tabuada', (req, res) => {
    const n = Number(req.query.num);
    const V = [];
    let texto = ''

    for (let i = 0; i <= 10; i++) {
        V[i] = mathFunctions.multiplicarNum(n, i);

        texto += `${n} x ${i} = ${V[i]} <br>`;
    }

    res.send(texto);
})

//Listando a porta em que o servidor vai rodar
app.listen(porta, () => {
    console.log(`Servidor Rodando na porta ${porta}`);
});