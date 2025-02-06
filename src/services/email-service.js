const { response } = require('express');
const sender = require('../config/emailconfig');
const TicketRepository = require('../repository/ticket-repository');
const repo= new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try{
        sender.sendMail({
            from : mailFrom,
            to : mailTo,
            subject : mailSubject,
            text : mailBody
        });
        console.log(response);
    } catch (error) { 
        console.log(error);
    }

}


const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await repo.get({status: "PENDING"});
        return response;
    } catch (error) {
        console.log(error);
    }
}

const updateTicket = async (ticketId, data) => {
    try {
        const response = await repo.update(ticketId, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createNotification = async (data) => {
    try {
        console.log(data);
        const response = await repo.create(data);           //here we made repo object as global, we create again and again in every class
        return response;
    } catch (error) {
        console.log(error);
    }
}


module.exports = { 
    sendBasicEmail,
    fetchPendingEmails,
    createNotification, 
    updateTicket
}




/*

SMTP --> a@b.com        from

reciever -> d@c.com     to


*/