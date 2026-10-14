import express, {type NextFunction, type Express, type Request, type Response} from "express";
import cors from "cors";
import helmet from "helmet";
import { NotFoundError } from "./utils/errors.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";

export const startApp = ():Express => {
    const app: Express = express();

    app.use(helmet());
    app.use(cors());

    app.use(express.json());  
    app.use(express.urlencoded({extended: true}));

    app.get("/api/health", (_req, res: Response):void =>{
        res.status(200).json({status:"OK"});
    });

    app.use((req:Request, _res, next: NextFunction): void => {
        next(new NotFoundError(`Can't find ${req.originalUrl} on this server`));
    });

    app.use(globalErrorHandler);

    return app;
}