import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import HomePageModel from './models/HomePage';
import homePageRouter from './routes/homePageRoutes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/OnlineEducationPortal');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/',homePageRouter(HomePageModel));

app.listen(4000,()=>console.log('Server Up on 4000'));