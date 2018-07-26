"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Database = /** @class */ (function () {
    function Database() {
        this.connection = new Sequelize(process.env.DB_URL);
    }
    Database.prototype.connect = function () {
        this.connection
            .authenticate()
            .then(function () {
            console.log('Connection has been established successfully.');
        })
            .catch(function (err) {
            console.error('Unable to connect to the database:', err);
        });
    };
    return Database;
}());
exports.Database = Database;
