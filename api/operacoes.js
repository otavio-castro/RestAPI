const mathFunctions = require('../services/operacoes');

const apiSomar = (req, res) => {
    const { num1, num2 } = req.body;
    const result = mathFunctions.somaNum(num1, num2);

    res.send({ result });
}

const apiSub = (req, res) => {
    const { num1, num2 } = req.body;
    const result = mathFunctions.subtrairNum(num1, num2);

    res.json({ result });
}

const apiMulti = (req, res) => {
    const { num1, num2 } = req.body.numeros;
    const result = mathFunctions.multiplicarNum(num1, num2);

    res.json({ result });
}

const apiDiv = (req, res) => {
    const { num1, num2 } = req.body.numeros;
    const result = mathFunctions.divisaoNum(num1, num2);

    res.json({ result });
}

const apiPar = (req, res) => {
    const { num } = req.body;
    const result = mathFunctions.verificaPar(num);

    res.json(result);
};

const apiCalculadora = (req, res) => {
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
};

const apiNotas = (req, res) => {
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
};

module.exports = {
    apiSomar,
    apiSub,
    apiMulti,
    apiDiv,
    apiPar,
    apiCalculadora,
    apiNotas
}