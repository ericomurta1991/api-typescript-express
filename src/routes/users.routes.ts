import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes} from 'http-status-codes';

const userRoute = Router();

userRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Manuh'}];
    res.status(StatusCodes.OK).send(users);
});
                //req: Request<{uuid: Sring}> //dessa forma o params ganhar auto complete uuid
userRoute.get('/users/:uuid', (req: Request<{uuid: String}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({uuid});
});

userRoute.post('/users', (req:Request, res:Response, next: NextFunction) =>{
    const newUser = req.body;

    console.log(newUser);
    res.status(StatusCodes.CREATED).send(newUser);
});

userRoute.put('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;   

    res.status(StatusCodes.OK).send( modifiedUser);
});

userRoute.delete('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
    

})


export default userRoute;