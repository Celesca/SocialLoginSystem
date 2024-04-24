import express, { Request, Response } from 'express';
const authRouter = require('./routes/auth');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', authRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})