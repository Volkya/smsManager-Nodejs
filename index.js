require('dotenv').config();
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const app = express();

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    twiml.message('Message received');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());  
})

app.listen(4000, () => {
    console.log('Server on port 4000');
})

// Send
// const ASID = process.env.ACCOUNT_SID;
// const ATOKEN = process.env.AUTH_TOKEN;
// from
// const client = require('twilio')(ASID, ATOKEN);
// write msg
// client.messages.create({
//     to: process.env.PHONEN,
//     from: '+12562697144',
//     body: 'Example test'
// })
//     .then(message => console.log(message.sid));