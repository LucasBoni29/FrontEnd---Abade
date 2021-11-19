const express = require("express");
const server = express();

//conf nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache: true
});

//config arquivos estaticos (css, scripts, imgs)
server.use(express.static("public"));
server.use(express.urlencoded({ extended: true })) //adicionou para poder recuperar o body

server.get("/", function(req, res){ 
    return res.render("pagIndex.html");
 })


server.get("/jogador", function(req,res){
    return res.render("pagCadastroJogador.html")

})

server.get("/responsavel", function(req,res){
    return res.render("pagCadastroPais.html")

})

//Método POST
server.post("/responsavel", function(req, res){
    //Inserir Dados
    const query = `
    INSERT INTO projetos(
        nome,
        email,
        caracteristica,
        problemas,
        moradores,
        descricao
    ) VALUES (?,?,?,?,?,?)` ;
    const values = [req.body.nome, req.body.email, req.body.caracteristica, req.body.problemas, req.body.moradores, req.body.descricao];
    bd.run(query, values, function(err){
        if(err) return console.log(err);        
        console.log("Dado armazenado com sucesso!");
    });
    return res.redirect("/jogador");
})

server.listen(3000);