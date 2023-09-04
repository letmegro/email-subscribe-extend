
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "hotmail",
    port: 587,
    auth: {
        user: process.env.NEXT_ESERVER,
        pass: process.env.NEXT_KEY //add password here when to use
    },
    tls: { ciphers: 'SSLv3' }
});


export default function handler(req, res){
    const body = JSON.parse(req.body);
    const email = body['Email'];
    const options = {
        from: process.env.NEXT_ESERVER,
        to: email,
        subject: "Diet and Fitness newletter",
        text: "Dear subscriber\n\nYou're receiving this email as a confirmation that\nyou have subscribed to our newsletter!\n\nThankYou!"
    };
    
    transporter.sendMail(options, function(err, info){
        if(err){
            console.log(err);
            return;
        }
    
    });
    res.send('Status: 200');
}