import express, { Request, Response, Router } from 'express';

const authRouter:Router = express.Router();

authRouter.get('/', (req:Request, res:Response) => {
    res.json("Hello World!")
})

module.exports = authRouter;