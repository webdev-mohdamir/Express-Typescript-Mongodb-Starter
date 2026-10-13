import express, {type Express, type Request, type Response} from "express";
import cors from "cors";
import helmet from "helmet";

export const startApp = ():Express => {
    const app: Express = express();

    app.use(helmet());
    app.use(cors());

    app.use(express.json());  
    app.use(express.urlencoded({extended: true}));

    app.get("/api/health", (req: Request, res: Response):void =>{
        res.status(200).json({status:"OK"});
    });

    return app;
}