require('dotenv').config();
import { Sequelize } from 'sequelize-typescript';
import express from "express"; express();
import { DefaultRouter } from './routes/default.route';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', DefaultRouter);

// export const sequelize = new Sequelize({
    // database: 'forfeater',
    // dialect: 'postgres',
    // username: 'forfeater',
    // password: 'secret',
    // storage: ':memory:',
    // modelPaths: [__dirname + '/models']
// });

export const application = app; 