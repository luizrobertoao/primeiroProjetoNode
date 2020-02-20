// const fs = require('fs');
// let moment = require('moment');
// const superHerois = require('./superHerois');

// let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');
// let data = moment().format('MMM do YY');

// console.log(superHerois);

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/plain'});

        switch(req.url) {
            case '/':
                res.end('Você está na página home!')
                break;
            case '/contato':
                res.end('Você está na página de contatos!')
                break;
            default:
                res.end('Você está no nosso servidor!');
        }
}).listen(3000, 'localhost');