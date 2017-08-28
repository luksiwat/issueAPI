import * as express from 'express'; //ใข้ manage รับ request
import * as bodyParser from 'body-parser'; //ใช้ put post
import * as cors from 'cors'; //เรียก cost domain 
import  { CompanyController } from './controllers/company';
import  { UserController } from './controllers/user';

//create a new express application instance
const app: express.Application = express(); 

//the port the express app will listen on
const port: string = process.env.PORT || '3000'; //bulid config port ตอน runtime

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/company', CompanyController);
app.use('/user', UserController);

//serve the application at the given port
app.listen(port, () => {  //ทำงานตาม port ที่เอาเข้ามา
    //success callback
    console.log(`Listening at http://localhost:${port}/`);
});

