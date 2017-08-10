//nodemailer and xoauth2 imports
var nodemailer = require("nodemailer");
var xoauth2 = require("xoauth2");
//other variables
var userEmail = document.getElementById("fromTextBox");

//transporter object
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
            xoauth2: xoauth2.createXOAuth2Generator({
                user: userEmail.innerText,
                clientId: "",
                clientSecret: "",
                refreshToken: ""
            })
    }
});

//mailOptions object
var mailOptions = {
    from: userEmail.innerText,
    to: "testpurposemudrak@gmail.com",
    subject: "Contact via characterworld.",
    text: document.getElementById("emailBodyTextArea").innerText
};//try running by removing semicolon if errors/exceptions occur

//code to SEND THE EMAIL
transporter.sendMail(mailOptions, function(error, response) {
    if (error){
        alert("ERROR Ocurred!\n" + error);
    } else{
        console.log("Email sent successfully!");
    }
});