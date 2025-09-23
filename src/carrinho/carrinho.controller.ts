import { Request, Response } from "express";
import { db } from "../database/banco-mongo.js";

class CarrinhoController {
    async adicionar(req: Request, res: Response) {
        const item = req.body
        const resultado = await db.collection('carrinho')
            .insertOne(item)
        res.status(201).json({ ...item, _id: resultado.insertedId })
    }
    async listar(req: Request, res: Response) {
        const itens = await db.collection('carrinho').find().toArray();
        res.status(200).json(itens);
    }
}


interface ItemCarrinho {
produtoId: string;
quantidade: number;
precoUnitario: number;
nome: string;
}

interface Carrinho {
    usuarioId: string;
    itens: ItemCarrinho[];
    dataAtualizacao: Date;
    total: number;
}



export default new CarrinhoController();