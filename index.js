const express = require('express');
const app = express();
const porta = 3000;

//Funções Auxiliares

function verificaPar(num) {
    return (num % 2 == 0);
}


//Rotas HTTP

app.get('/soma', (req, res) => {
    const soma = Number(req.query.num1) + Number(req.query.num2);

    res.send(`Soma: ${soma}`);
});


app.get('/sub', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const sub = num1 - num2;

    res.send(`${num1} - ${num2} = ${sub}`)
});

app.get('/par', (req, res) => {
    const num = Number(req.query.num);

    if (verificaPar(num))
        res.send(`${num} é Par`)
    else
        res.send(`${num} é Ímpar`)

});

app.get('/calculadora/:sinal', (req, res) => {

})


app.listen(porta, () => {
    console.log(`Servidor Rodando na porta ${porta}`);
});