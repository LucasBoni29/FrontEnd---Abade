const sqlite3 = require("sqlite3");
const bd = new sqlite3.Database("./responsavel.bd");

bd.serialize(function(){
    // //Criar Tabela
    bd.run(` 
        CREATE TABLE IF NOT EXISTS responsavel(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            email TEXT,
            caracteristica TEXT,
            problemas TEXT,
            moradores INTEGER,
            descricao TEXT);
    `);
})