const WebSocket = require('ws')
const express = require('express')
const path = require('path')

const wss = new WebSocket.Server({port:3001}) 

const app = express()
const port = 3000

const allSockets = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

/*
app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:3000')
})
*/
app.listen('3000', '192.168.1.30', () => {
    console.info('server started on port 80')
})

const handleMessage = (msg) => {
    console.log('Recebi do cliente', msg)

    for (let ws of allSockets) {
        console.log('Mandando ', msg)
        ws.send(msg);
    }
}       

wss.on('connection', (ws) => { //Quando um cliente se conectar ao servidor, ele manda uma mensagem para o cliente
    console.log('conectaram')
    allSockets.push(ws)
    ws.on('message', handleMessage)  
})