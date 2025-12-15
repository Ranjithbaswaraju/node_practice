// const express=require('express')
// const app=express()
// const port=3000
// const {MongoClient}=require('mongodb')
// const client=new MongoClient("mongodb://localhost:27017/")

// const createDB=async(req,res)=>{
//     try{
//         await client.connect()
//         let db=client.db("practice_mongo")
//         let collection=db.collection("user_data")
       
//         await collection.insertOne({name:"raniith",age:25})
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// createDB()
// app.listen(port,()=>{
//     console.log(`Server running at ${port}`)
// })

const express=require('express')
const app=express()
const port=3000
const {MongoClient}=require("mongodb")
const client=new MongoClient("mongodb://localhost:27017/")
let db;
let collection;
app.use(express.json())


const connectDB=async(req,res)=>{
 try{
    await client.connect()
    db=client.db("ranjith_practice");
    collection=db.collection("user_data")
 }
 catch(err){
    console.log(err)
 }
}

app.post("/postData",async(req,res)=>{
    try{
        await collection.insertOne(req.body)
        res.send("data added")
    }catch(err){
        res.json('not add')
    }
})
connectDB( )

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})
