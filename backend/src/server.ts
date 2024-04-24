import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const authRouter = require('./routes/auth');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));
app.use(morgan('dev'));
app.use('/', authRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})