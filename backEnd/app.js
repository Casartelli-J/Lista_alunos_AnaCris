import alunoRouter from "./routers/alunos.router.js";
import cors from "cors";
import express from "express";

export function createApp(){
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use("/alunos", alunoRouter);

    return app;
}
