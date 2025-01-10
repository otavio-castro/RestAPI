//Path = Parametro de Rota (req.params);
//Query = Parametro de Consulta (req.query);

const express = require('express');
const mathFunctions = require('./services/operacoes');
const api = require('./api/operacoes');

const app = express();
const porta = 3000;

app.use(express.json());

// 0-Calculos Basicos
app.post('/somar', (api.apiSomar));
app.post('/somaPost', (req, res) => {
    const { num1, num2 } = req.body.numbers;
    const result = mathFunctions.somaNum(num1, num2);

    res.json({ result });
})
// Teste em GET
app.get('/somar', (req, res) => {
    const { num1, num2 } = req.query
    const result = Number(num1) + Number(num2);

    res.json({ result });
});

app.post('/sub', (api.apiSub));
app.post('/multi', (api.apiMulti));
app.post('/div', (api.apiDiv));

// 02-par.js
app.post('/par', (api.apiPar));

// 04-calculadora.js '/:sinal é um path'
app.post('/calculadora/:sinal', (api.apiCalculadora));

// 05-notas.js
app.post('/notas', (api.apiNotas))

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