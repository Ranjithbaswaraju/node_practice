const express=require("express");
const port=3000
const app=express()
const bcrypt=require("bcryptjs")

const token='ranjith@123'
// console.log(bcrypt.hashSync(token,15))

const token1='$2b$15$5V3GR8kO7EO3hGb/1KqHae3j7lAQIMMQtOODBWC9dLL20Tb2j.h/S'
console.log(bcrypt.compareSync(token,token1))




app.listen(port,()=>{
    console.log(`server running at ${port}`)
})