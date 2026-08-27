import * as alunos from "../controllers/alunos.controller.js";
import Router from "express";

const alunoRouter = Router();

alunoRouter.get("/", alunos.getAlunos);
alunoRouter.post("/", alunos.postAlunos);
alunoRouter.put("/:id", alunos.putAlunos);
alunoRouter.delete("/:id", alunos.deleteAlunos);

export default alunoRouter;