const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverconfig');

const {sendBasicEmail} = require('./services/email-service');

const setupAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);

        sendBasicEmail(
            'support@admin.com',
            'vineethd333@gmail.com',
            'This is a testing email',
            'Hey how are you'
        )
    
    });
}   

setupAndStartServer();