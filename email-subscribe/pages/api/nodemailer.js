const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: "hotmail",
    port: 465,
    requireTLS: true,
    auth: {
        user: process.env.NEXT_ESERVER,
        pass: process.env.NEXT_KEY //add password here when to use
    },
    
    tls: { 
        maxVersion: 'TLSv1.3',
        minVersion: 'TLSv1.2',
        ciphers: 'TLS_AES_128_GCM_SHA256'
    }
    
});


export default async function handler(req, res){
    const body = JSON.parse(req.body);
    const email = body['Email'];
    const options = {
        from: process.env.NEXT_ESERVER,
        to: email.toString(),
        subject: "Diet and Fitness newletter",
        text: "Dear subscriber\n\nThank you for testing out this email subscription.\n\n\nPlease note this is a mini project and not a real subscription service\nPlease do not reply to this email."
    };
    
    await new Promise((resolve, reject) => {
        transporter.sendMail(options, function(err, info){
        if(err){
            console.log(err);
            return;
        }
     })
    });
    res.send('Status: 200');
    
}