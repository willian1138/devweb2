/*const express = require("express")
const app = express()

app.listen(8081, function())
    console.log("Servidor ativo!")*/

const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "", { // teste eh o nomee do banco
    host : "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})

const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.INTEGER
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING

    },
    observacao:{
        type: Sequelize.STRING
    }
    
})
//Agendamentos.sync({force: true}) //apos o comanod ter criado a tabela comenta-lo

Agendamentos.create({
    nome: "Willian",
    endereco: "Rua Ficticia",
    bairro: "Jd Ficticio",
    cep: 192749178,
    cidade: "Sao Paulo",
    estado: "Sao Paulo",
    observacao: "Atualizado",
})
    
    
    

