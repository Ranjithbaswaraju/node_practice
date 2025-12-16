// const express=require("express")
// const app=express()
// const port=3000

// app.use((req,res,next)=>{
    
//     console.log(req.method,req.url)
//     next()
// })



// app.listen(port,()=>{
//     console.log(`server running at ${port}`)
// })


const express=require("express")
const app=express()
const port=3000
const fs=require("fs")
const { json } = require("stream/consumers")
app.use((req,res,next)=>{
    console.log(req.url,req.method)
    const data={
        method:req.method,
        url:req.url
    }
    fs.appendFileSync("a.txt",JSON.stringify(data))
    next()
})


app.listen(port,()=>{
    console.log(`server running at ${port}`)
})