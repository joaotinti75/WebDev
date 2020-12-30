const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Msg = require('./models/Mensagem')

app.use(express.static('public'))

// Configurando o Template Engine Handlebars
app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

// Configurando o Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.render('formulario')
})

app.get('/sucesso', function(req, res){
    Msg.findAll().then(function(msgs){
        //console.log(msgs) //trata-se de um array
        res.render('formulario', {msgs:msgs})
    })
})


app.post('/add', function(req, res){
    Msg.create({
        msg: req.body.mensagem
    }).then(function(){
        res.redirect('/sucesso')
        //res.send('Post criado com sucesso') 
    }).catch(function(erro){
        res.send('Houve um erro: ' + erro)
    })
    //res.send(`Mensagem: ${req.body.mensagem}`)//Quando o formulario tem o método post, devemos mudar o tipo da rota para post
})

app.listen('80', '192.168.1.30', () => {
    console.info('server started on port 80')
})

