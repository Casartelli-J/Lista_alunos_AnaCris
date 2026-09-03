import {db} from "../config/db.js";

export const getAlunos = async (req, res) => {
    const {id} = req.query;
    const {nome} = req.query;
    let sql = "SELECT * FROM alunos WHERE 1";

    let params = [];

    if(id){
        sql += ` AND id = ? `;
        params.push(id);
    }

    if(nome){
        sql += ` AND nome LIKE ?`;
        params.push(`%${nome}%`);
    }

    sql += " ORDER BY nome"
    const [busca] = await db.query(sql, params);
    res.status(201).json(busca);

}

export const postAlunos = async (req, res) => {
    let {nome, cor, tamanho, malha, preco} = req.body;
    let sql = "INSERT INTO alunos(nome, cor, tamanho, malha, preco) VALUES (?, ?, ?, ?, ?)";

    if(nome === ""){
        res.status(404).json("Insira o nome")
    }

    if(cor === "" && cor.Nan){
        res.status(404).json("Insira uma cor válida")
    }
    if(tamanho === "" && tamanho.Nan){
        res.status(404).json("Insira um tamamho válida")
    }
    if(malha === "" && malha.Nan){
        res.status(404).json("Insira uma malha válida")
    }
    if(preco === "" && preco.Nan){
        res.status(404).json("Insira um preco válida")
    }


    if(nome && cor && tamanho && malha && preco){
        const post = await db.query(sql, [nome, cor, tamanho, malha, preco]);
        res.status(201).json("Aluno inserido");
    }
}

export const putAlunos = async (req, res) => {
    const {id} = req.params;
    let {nome, cor, tamanho, malha, preco} = req.body;
    let sql = "UPDATE alunos SET nome = ?, cor = ?, tamanho = ?, malha = ?, preco = ? WHERE id = ?";

     if(nome === ""){
        res.status(404).json("Insira o nome")
    }

    if(cor === "" && cor.Nan){
        res.status(404).json("Insira uma cor válida")
    }
    if(tamanho === "" && tamanho.Nan){
        res.status(404).json("Insira um tamamho válida")
    }
    if(malha === "" && malha.Nan){
        res.status(404).json("Insira uma malha válida")
    }
    if(preco === "" && preco.Nan){
        res.status(404).json("Insira um preco válida")
    }

    if(nome && cor && tamanho && malha && preco && id){
        const post = await db.query(sql, [nome, cor, tamanho, malha, preco, id]);
        res.status(201).json("Aluno atualizado");
    }
}

export const deleteAlunos = async (req, res) => {
    const {id} = req.params;
    const sql = "DELETE FROM alunos WHERE id = ?";

    const del = await db.query(sql, [id]);
    res.status(201).json("Aluno deletado")
}

export const checkAlunos = async (req, res) => {
    const {id} = req.params;
    const sql = "SELECT pago_check FROM alunos WHERE 1 AND id = ?";

    const get = await db.query(sql, [id]);
    res.status(201).json(get[0].pago_check)
    

    
}