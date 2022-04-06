import { Express, Request, Response } from "express";
import express from "express";
import * as path from "path";


export class Server {    

    private getEntry(): object {
        return { id : 4, user: 1, name: "wilson"};
    }

    constructor(private app:Express){
        
        // connecting the express instance to the cra frontend that will be in the build folder
        this.app.use(express.static(path.resolve("./") + "/build/frontend"))
        // handle a simple api request
        this.app.get("/api", (req:Request, res: Response): void => {
            res.send("You have reached the API!");});

        this.app.get("/api/entries", (req:Request, res: Response): void => {
            res.send(this.getEntry());
        });
        // Point all other calls to the index file.    
        this.app.get("*", (req: Request, res: Response): void => {
            res.sendFile(path.resolve("./") + "/build/frontend/index.html");
        });
    }

    public start(port:number):void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }
}