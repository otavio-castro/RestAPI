const http = require('http');

http.createServer((request, response) => {
    console.log(request.method);

    if (request.method === 'POST') {
        response.write('Hello Word, Otavio!');
        response.end();
    }
    else if (request.method === 'GET') {
        response.write('Metodo Get');
        response.end();
    }
}).listen(3000)