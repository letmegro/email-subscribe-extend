
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "tne-testing@outlook.com",
        pass: ""//add password here when to use
    }
});

const options = {
    from: "tne-testing@outlook.com",
    to: "nick.kor23@gmail.com",
    subject: "Sent node email",
    text: "Wow it worked!"
};

transporter.sendMail(options, function(err, info){
    if(err){
        console.log(err);
        return;
    }
    console.log("sent" + info.response);

});

function e(){
    console.log('d');
}