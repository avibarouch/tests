const express = require('express');
const router =  require('./routes');
const http = require('node:http');
const HTTPPORT = 8080;

const app = express();
app.use(express.json());
app.use(router);

const httpServer = http.createServer(app);
httpServer.listen(HTTPPORT, (err,data)=> {
    console.log(`Server listen port ${HTTPPORT}`)
});

httpServer.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('Meybe you did "npm run dev" on another terminal? Kill The other terminal and try again!')
    }
});

module.exports = {httpServer};