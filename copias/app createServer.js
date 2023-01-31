const http = require('http');

http.createServer((req, res) => {

    // cambiar tipo de respuesta del servidor a json
    // res.writeHead(200, { 'Content-Type': 'application/json' })
    // cambiar nombre y responder como csv
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type': 'application/csv' })

    res.write('Hola mundo');


    res.end();

}).listen(8080);

console.log('listen localhost:8080')
// console.log(req)
// res.writeHead(404)