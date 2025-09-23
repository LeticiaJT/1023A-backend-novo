import usuarioController from "./usuarios/usuario.controller.js";
import produtoController from "./produtos/produtos.controller.js";
import carrinhoController from "./carrinho/carrinho.controller.js";

import { Router } from 'express';
const rotas = Router();

//Criando rotas para os usuários
rotas.post("/usuarios", usuarioController.adicionar);
rotas.get("/usuarios", usuarioController.listar);

//Criando rotas para os produtos
rotas.post("/produtos", produtoController.adicionar);
rotas.get("/produtos", produtoController.listar);

//Criando rotas para o carrinho
rotas.post("/carrinho", carrinhoController.adicionar);
rotas.get("/carrinho", carrinhoController.listar);
//rotas.delete("/carrinho/:id", carrinhoController.remover);

export default rotas;