import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const  statusRoute = Router();

statusRoute.get('/status', (req: Request,res: Response, next: NextFunction) => {
    const status = [{ username: 'status teste'}];
    res.status(StatusCodes.OK).send(status);
});
statusRoute.get('/status/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send(uuid);
});
statusRoute.post('/status', (req: Request, res: Response, next: NextFunction) => {
    const newStatus = req.body;

    console.log(newStatus);
    res.status(StatusCodes.OK).send(newStatus);
});
statusRoute.put('/status/uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedStatus = req.body;

    modifiedStatus.uuid = uuid;
    res.status(StatusCodes.OK).send(modifiedStatus);
});
statusRoute.delete('/status/:uuid',(req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
})

export default statusRoute;