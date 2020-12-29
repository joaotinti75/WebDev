const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Msg = require('./models/Mensagem')

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
        res.render('sucesso', {msgs:msgs})
    })
})

//Para eu ordenar as mensagens do mais recente para o mais antigo, basta eu inserir alguns argumentos na função findAll

//Msg.findAll({order: [['id', 'DESC']]})

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

app.get('/deletar/:id', function(req,res){
    Msg.destroy({where: {'id':req.params.id}}).then(function(){
        res.send('Mensagem deletada com sucesso')
    }).catch(function(erro){
        res.send('Esta postagem não existe!')
    })
}) //deleto uma linha do banco através da id da linha



app.listen(8081, function(){
    console.log('Servidor rodando na url: http://localhost:8081')
})