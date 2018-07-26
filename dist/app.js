"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express_1 = __importDefault(require("express"));
express_1.default();
var default_route_1 = require("./routes/default.route");
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/', default_route_1.DefaultRouter);
// export const sequelize = new Sequelize({
// database: 'forfeater',
// dialect: 'postgres',
// username: 'forfeater',
// password: 'secret',
// storage: ':memory:',
// modelPaths: [__dirname + '/models']
// });
exports.application = app;
