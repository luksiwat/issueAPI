"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express"); //ใข้ manage รับ request
var bodyParser = require("body-parser"); //ใช้ put post
var cors = require("cors"); //เรียก cost domain 
var company_1 = require("./controllers/company");
var user_1 = require("./controllers/user");
//create a new express application instance
var app = express();
//the port the express app will listen on
var port = process.env.PORT || '3000'; //bulid config port ตอน runtime
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/company', company_1.CompanyController);
app.use('/user', user_1.UserController);
//serve the application at the given port
app.listen(port, function () {
    //success callback
    console.log("Listening at http://localhost:" + port + "/");
});
//# sourceMappingURL=D:/issueAPI/server.js.map