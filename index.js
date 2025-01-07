const express = require('express');
const mathFunctions = require('./math');

const app = express();
const porta = 3000;

app.use(express.json());

//Path = Parametro de Rota;
//Query = Parametro de Consulta;

// 0-soma.js
app.post('/somar', (req, res) => {
    const { num1, num2 } = req.body;
    const result = mathFunctions.somaNum(num1, num2);

    res.send({ result });
});

// 01-subtrair.js
app.post('/sub', (req, res) => {
    const { num1, num2 } = req.body;
    const result = mathFunctions.subtrairNum(num1, num2);

    res.json({ result });

});

// 02-par.js
app.post('/par', (req, res) => {
    const { num } = req.body;
    const result = mathFunctions.verificaPar(num);

    res.json(result);
});


// 04-calculadora.js
app.post('/calculadora/:sinal', (req, res) => {
    const { num1, num2 } = req.body;
    const sinal = req.params.sinal;
    let result;

    switch (sinal) {
        case "+":
            result = mathFunctions.somaNum(num1, num2);
            break;

        case "-":
            result = mathFunctions.subtrairNum(num1, num2);
            break;

        case ":":
            result = mathFunctions.divisaoNum(num1, num2);
            break;

        case "*":
            result = mathFunctions.multiplicarNum(num1, num2);
            break;

        default:
            result = 'invalid';
    }

    res.json({ result });
});

// 05-notas.js
app.post('/notas', (req, res) => {
    const notas = req.body.notas;
    let soma = 0
    let result;

    notas.forEach((item) => {
        soma += item;
    })

    const media = soma / notas.length;

    if (media < 6)
        result = "Abaixo da Média";
    else if (media === 6)
        result = "Na média";
    else
        result = "Acima da Média";

    res.json({ result });
});

// 06-contPares.js
app.post('/contPar', (req, res) => {
    const { num } = req.body;
    let contPar = 0;
    let contImpar = 0;

    for (let i = 1; i <= num; i++)
        if (mathFunctions.verificaPar(i))
            contPar++;
        else
            contImpar++;

    res.json({
        Result: {
            Pares: contPar,
            Impares: contImpar
        }
    });
})

// 07-maiorIdade (Verifica a maior idade)
app.post('/maiorIdade', (req, res) => {
    const { idades } = req.body

    const result = mathFunctions.verificaMaior(idades);

    res.json({ result });

});

// (Verifica a menor idade)
app.post('/menorIdade', (req, res) => {
    const { idades } = req.body

    const result = mathFunctions.verificaMenor(idades);

    res.send({ result });

});

// 08-tabuada.js
app.post('/tabuada', (req, res) => {
    const { num } = req.body;

    const result = new Array(11);

    for (let i = 0; i <= 10; i++)
        result[i] = mathFunctions.multiplicarNum(num, i);

    res.json({ result });
})

// 09-Primos.js
app.post('/primos', (req, res) => {
    const { num } = req.body;
    let primo;
    const result = new Array(num);
    let j = 2;

    for (let i = 0; i < result.length; i++) {

        do {
            primo = mathFunctions.verificaPrimo(j);

            if (primo)
                result[i] = j

            j++;
        } while (!primo);
    }

    res.json({ result });
});

// 10-ForEach
app.post('/forEach', (req, res) => {

    const { numeros } = req.body

    let soma = 0;

    numeros.forEach(item => {
        soma += item;
    });

    res.json({ result: soma });

});

//Listando a porta em que o servidor vai rodar
app.listen(porta, () => {
    console.log(`Servidor Rodando na porta ${porta}`);
});