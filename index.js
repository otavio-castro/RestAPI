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

// 09-contPrimos.js
app.get('/contPrimos', (req, res) => {
    const n = Number(req.query.num);
    let primo;
    let texto = '';
    let j = 2;

    for (let i = 1; i <= n; i++) {

        do {
            primo = mathFunctions.verificaPrimo(j);

            if (primo)
                texto += `${j} -`

            j++;
        } while (!primo);
    }

    res.send(texto);
});

// 10-ForEach
app.get('/forEach', (req, res) => {
    const V = [
        Number(req.query.num1),
        Number(req.query.num2),
        Number(req.query.num3)
    ];

    let soma = 0;

    V.forEach(item => {
        soma += item;
    });

    res.json({ soma });

});

//Listando a porta em que o servidor vai rodar
app.listen(porta, () => {
    console.log(`Servidor Rodando na porta ${porta}`);
});