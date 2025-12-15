const express=require("express")
const app=express()
const port=3000
const nodemailer=require("nodemailer")
const dotenv=require("dotenv");
dotenv.config()

const mail=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.nodemailer_mail,
        pass:process.env.nodemailer_pass
       
    }
})

const mailPoints={
    from:process.env.nodemailer_mail,
    to:"ranjithbaswaraju27@gmail.com",
    subject:"Invitation for interview",
    text:"Hello"
}

mail.sendMail(mailPoints,(err,info)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("mail sent succesfully")
    }
})

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})