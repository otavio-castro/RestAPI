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
app.post('/notas', (api.apiNotas));

// 06-contPares.js
app.post('/contPar', (api.apiContPar));

// 07-maiorIdade (Verifica a maior idade)
app.post('/maiorIdade', (api.apiMaiorIdade));

// (Verifica a menor idade)
app.post('/menorIdade', (api.apiMenorIdade));

// 08-tabuada.js
app.post('/tabuada', (api.apiTabuada));

// 09-Primos.js
app.post('/primos', (api.apiPrimos));

// 10-ForEach
app.post('/forEach', (api.apiForEach));

//Listando a porta em que o servidor vai rodar
app.listen(porta, () => {
    console.log(`Servidor Rodando na porta ${porta}`);
})

/*
app.listen(porta, function () {
    console.log(`Sem o arrow function`)
})
*/