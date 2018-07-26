"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var app_1 = require("./../src/app");
var MyServer = /** @class */ (function () {
    function MyServer() {
        this.header = { 'Content-Type': 'text/plain' };
        this.server = http_1.default.createServer(app_1.application);
        this.server.listen(3000);
        console.log("Server starting..");
    }
    return MyServer;
}());
new MyServer();
