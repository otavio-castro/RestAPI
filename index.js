const http = require('http');
const url = require('url')

http.createServer((request, response) => {
    const parsedURL = url.parse(request.url, true);
    const pathName = parsedURL.pathname
    const queryParams = parsedURL.query;

    if (pathName === '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;
    }

    console.log(queryParams);

    if (request.method === 'GET') {
        const soma = Number(queryParams.num) + Number(queryParams.num2);

        response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
        response.write(`Resultado da Soma é: ${soma}`);
        response.end();
    }

}).listen(3000)