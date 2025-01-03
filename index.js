const express = require('express');

const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    const soma = Number(req.query.num1) + Number(req.query.num2);

    res.send(`Olá Otávio! <br> Soma dos Parâmetros:${soma}`);
});

app.post('/', (req, res) => {
    const usuario = {
        nome: 'Otavio',
        idade: 19,
    }

    res.json(usuario);
});

app.listen(porta, () => {
    console.log(`Servidor Rodando na porta ${porta}`);
})

/*
SEM EXPRESS

const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { "content-type": 'text/plain; charset=utf-8' });

    res.write("Olá Otávio, Sem Express");
    res.end()

}).listen(9090);
*/