import Http from 'http';
import express from 'express';
import * as bodyParser from "body-parser";

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    public static bootstrap(): Server {
        return new Server();
    }

    private config() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

}


Server.bootstrap();