const express = require('express');

const app = express();
const porta = 3000;
app.use(express.json());

app.post('/somar', (req, res) => {
    const { num1, num2 } = req.body;

    res.status(201).json({
        result: num1 + num2
    });
});

app.get('/api/:id', (req, res) => {
    const id = req.params.id;

    res.send(`Hello Word! ${id}`);
});

app.listen(porta, () => {
    console.log(`Servidor Rodando na porta ${porta}`);
})

/*
app.post('/', (req, res) => {
    const usuario = {
        nome: 'Otavio',
        idade: 19,
    }

    res.json(usuario);
});
*/

/*
SEM EXPRESS

const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { "content-type": 'text/plain; charset=utf-8' });

    res.write("Olá Otávio, Sem Express");
    res.end()

}).listen(9090);
*/