"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var default_controller_1 = require("../controllers/default.controller");
var router = express_1.Router();
var defaultController = new default_controller_1.DefaultController();
router.get('/', defaultController.index);
exports.DefaultRouter = router;
