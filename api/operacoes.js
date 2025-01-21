const mathFunctions = require('../services/operacoes');

const apiSomar = (req, res) => {
    const { num1, num2 } = req.body.numbers;
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

const apiContPar = (req, res) => {
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
}

const apiMaiorIdade = (req, res) => {
    const { idades } = req.body;

    const result = mathFunctions.verificaMaior(idades);

    res.json({ result });
}

const apiMenorIdade = (req, res) => {
    const { idades } = req.body;

    const result = mathFunctions.verificaMenor(idades);

    res.json({ result });
}

const apiTabuada = (req, res) => {
    const { num } = req.body;

    const result = new Array(11);

    for (let i = 0; i <= 10; i++)
        result[i] = mathFunctions.multiplicarNum(num, i);

    res.json({ result });
};

const apiPrimos = (req, res) => {
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
};

const apiForEach = (req, res) => {
    const { numeros } = req.body;
    let soma = 0;

    numeros.forEach((item) => {
        soma += item;
    });

    res.json({ result: soma })
}

module.exports = {
    apiSomar,
    apiSub,
    apiMulti,
    apiDiv,
    apiPar,
    apiCalculadora,
    apiNotas,
    apiContPar,
    apiMaiorIdade,
    apiMenorIdade,
    apiTabuada,
    apiPrimos,
    apiForEach
}