import express, {Request, Response, NextFunction} from 'express';
import userRoute from './routes/users.routes';
import statusRoute from './routes/status.routes';

const app = express();
//middleware responsavel por interpretar content-Type, e se for json, tratar o arquivo.
app.use(express.json())
app.use(express.urlencoded({ extended: true}));

//configuracoes de Rotas
app.use(userRoute);
app.use(statusRoute);

app.get('/status',(req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'bar'});
});

// Inicializacao do Servidor 
app.listen(3000, () => {
    console.log('Aplicacao executando na porta 3000! Funcionando');
});