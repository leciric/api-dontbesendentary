"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var challenges_1 = require("./challenges");
var app = express_1.default();
app.get("/", function (request, response) {
    return response.json({ message: "Welcome to Dont be sedentary api" });
});
app.get("/challenges", function (request, response) {
    return response.json(challenges_1.Challenges);
});
app.listen(process.env.PORT || 3333, function () {
    console.log("Server started on port 3333!");
});
