const express=require("express")
const nodemailer=require("nodemailer")
const dotenv=require("dotenv")
dotenv.config();

const ranjith=nodemailer.createTransport({
    service:"gmail",
    auth:{
        pass:process.env.nodemailer_pass,
        user:process.env.nodemailer_mail
    }
})

async function sendMail(mailId){
    const mailOptions={
        from:process.env.nodemailer_mail,
        to:mailId,
        subject:"text mail",
        text:"text here"

    }

    try{
        const mailSent=await ranjith.sendMail(mailOptions)
        return "mail sent succsfllt"
    }catch(err){
        return err
    }
}

module.exports={sendMail}




