const express=require("express")
const app=express()
const port=3000
const cors=require('cors')


app.use(cors({
    origin:"http://localhost:5173"
}))

app.get("/get",(req,res)=>{
    res.send("Hello")
})




app.listen(port,()=>{
    console.log(`server running at ${port}`)
})