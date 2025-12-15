const express=require("express")
const app=express()
const port=3000
const mongoose=require("mongoose")
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/",{dbName:"ranjith_practice"})
.then(()=>console.log("succesfully connected")).catch((err)=>console.log(err))

const mongooseSchema=new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    age:{type:Number,required:true},
    phone:{type:Number,required:true}
})

const userModel=mongoose.model("users",mongooseSchema)

app.post("/postData",async(req,res)=>{
    const data=new userModel(req.body)
    const finalData=await data.save()
    res.json({
        message:"data added",
        data:finalData
    })
})

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})