"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultController = /** @class */ (function () {
    function DefaultController() {
    }
    DefaultController.prototype.index = function (req, res) {
        res.json({ 'success': true });
    };
    ;
    return DefaultController;
}());
exports.DefaultController = DefaultController;
