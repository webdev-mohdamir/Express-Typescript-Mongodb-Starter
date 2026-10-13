import { startApp } from "./app.js";
import { env } from "./configs/env.js";

const startServer = async (): Promise<void> =>{
    startApp().listen(env.PORT, ():void=>{
        console.log(`Server is running on port: ${env.PORT}`);
    });
}

startServer();