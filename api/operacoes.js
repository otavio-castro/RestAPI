const mathFunctions = require('../services/operacoes');

const apiSomar = (req, res) => {
    try {

        const { num1, num2 } = req.body.numbers;
        const result = mathFunctions.somaNum(num1, num2);

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const apiSub = (req, res) => {
    const { num1, num2 } = req.body;
    const result = mathFunctions.subtrairNum(num1, num2);

    res.json({ result });
}

const apiMulti = (req, res) => {
    try {
        const { num1, num2 } = req.body.numeros;
        const result = mathFunctions.multiplicarNum(num1, num2);

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const apiDiv = (req, res) => {
    try {
        const { num1, num2 } = req.body.numeros;
        const result = mathFunctions.divisaoNum(num1, num2);

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const apiPar = (req, res) => {
    try {
        const { num } = req.body;
        const result = mathFunctions.verificaPar(num);

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const apiCalculadora = (req, res) => {

    try {
        const { num1, num2 } = req.body;
        const sinal = req.params.sinal;
        const operadores = "+-:*"
        let result;

        //".includes" verifica se um determinado valor está presente dentro de uma string ou array

        if (!operadores.includes(sinal))
            throw new Error("Insira um operador válido (+, -, :, *)")

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

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const apiNotas = (req, res) => {
    try {
        const notas = req.body.notas;
        if (notas.length == 0)
            throw new Error("Insira pelo menos uma nota");

        let soma = 0
        let result;

        notas.forEach((item) => {
            if (isNaN(item) || item < 0)
                throw new Error("Insira apenas números válidos");
            else if (item > 10)
                throw new Error("As notas devem variar entre 0 a 10");

            soma += item;
        })

        const media = soma / notas.length;

        if (media < 6)
            result = "Abaixo da Média";
        else if (media === 6)
            result = "Na média";
        else
            result = "Acima da Média";

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const apiContPar = (req, res) => {
    try {
        const { num } = req.body;
        if (isNaN(num) || num <= 0)
            throw new Error("Insira um número válido, maior do que 0");

        let contPar = 0;
        let contImpar = 0;

        for (let i = 1; i <= num; i++)
            if (mathFunctions.verificaPar(i))
                contPar++;
            else
                contImpar++;

        res.status(200).json({
            Result: {
                Pares: contPar,
                Impares: contImpar
            }
        });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const apiMaiorIdade = (req, res) => {
    try {
        const { idades } = req.body;
        if (idades.length <= 1)
            throw new Error("Insira no mínimo duas idades");

        const result = mathFunctions.verificaMaior(idades);

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const apiMenorIdade = (req, res) => {
    try {
        const { idades } = req.body;
        if (idades.length <= 1)
            throw new Error("Insira no mínimo duas idades");

        const result = mathFunctions.verificaMenor(idades);

        res.json({ result });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const apiTabuada = (req, res) => {
    try {
        const { num } = req.body;
        const result = new Array(11);

        for (let i = 0; i <= 10; i++)
            result[i] = mathFunctions.multiplicarNum(num, i);

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const apiPrimos = (req, res) => {
    try {
        const { num } = req.body;
        if (isNaN(num) || num <= 0)
            throw new Error("Insirá um número válido maior que 0 ");

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

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const apiForEach = (req, res) => {
    try {
        const { numeros } = req.body;
        let soma = 0;

        numeros.forEach((item) => {
            if (isNaN(item))
                throw new Error("Insirá apenas números válidos");

            soma += item;
        });

        res.status(200).json({ result: soma });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

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