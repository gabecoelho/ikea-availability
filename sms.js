const config = require('./config.json')
const accountSid = config.accountSid;
const authToken = config.authToken;
const client = require('twilio')(accountSid, authToken);

sendMessage = () => {
    client.messages
        .create({
            body: 'IKEA East Palo Alto store available for Click & Collect',
            from: config.fromPhoneNumber,
            to: config.toPhoneNumber
        })
        .then(message => console.log(message.sid));
}

module.exports = sendMessage