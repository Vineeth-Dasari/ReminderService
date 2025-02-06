const express = require('express');
const bodyParser = require('body-parser');

const jobs = require('./utils/job');

const { PORT } = require('./config/serverconfig');

const {sendBasicEmail} = require('./services/email-service');
const TicketController = require('./controllers/ticker-controller');

const setupAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);

        jobs();
        // sendBasicEmail(
        //     'support@admin.com',    //from
        //     'vineethd333@gmail.com',    //to
        //     'This is a testing email',
        //     'Hey how are you'
        // )
    
    });
}   

setupAndStartServer();