const express=require('express')
const { MongoNetworkError } = require('mongodb')
const app=express()
const mongoose=require("mongoose")
app.use(express.json())
app.use(express.urlencoded())



mongoose.connect("mongodb://localhost:27017/",{dbName:"mongooseExample"})
.then(()=>{console.log("connected successfully")})
.catch(()=>{console.log("error occured")})

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,unique:true}
})

const userModel=mongoose.model("users",userSchema)


app.post("/postData",async(req,res)=>{
    try{
        const data = new userModel({
            name:req.body.name,
            age:req.body.age
        })
        const finalData=await data.save()
        res.json({
            message:"data added successfully",
            data:finalData
        })

    }
    catch(err){
        res.send(err)
    }
})


app.get("/getData",async(req,res)=>{
    try{
        const data =await userModel.find()
        res.json(data)
    }
    catch(err){
        res.send(err)
    }
})


app.put("/update/:id",async(req,res)=>{
    try{
        const updateItem=await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        // const updateItem=await userModel.updateOne({name:req.params.id},req.body,{new:true})
        res.json({message:"updated successfully",
            data:updateItem
        })
    }catch(err){
        res.send(err)
    }
})

app.get("/getSingle/:id",async(req,res)=>{
    try{
        const item=await userModel.findById(req.params.id,req.body)
        res.json(item)
    }catch(err){
        res.send(err)
    }
})


app.delete("/deleteItem/:id",async(req,res)=>{
    try{
        const data=await userModel.findByIdAndDelete(req.params.id)
        res.json({
            message:"deleted succesfully",
            data:data
        })
    }
    catch(err){
        res.send(err)
    }
})




app.listen(3000,()=>{
    console.log("server running at succesfully")
})