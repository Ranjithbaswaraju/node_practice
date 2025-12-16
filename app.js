const colors=require("colors")

console.log('hi'.yellow)
console.log("bye".bgYellow)
console.log("NARENDRA".bgBlue)



//

// const fs=require('fs');
// const data=fs.writeFileSync("a.txt","hello",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("data added")
//     }
// })


// write file synchronously

// const fs=require('fs');
// const data=fs.writeFileSync("a.txt","bye")
// console.log(data)



//readFile sync

// const fs=require('fs')
// fs.readFile("a.txt",'utf-8',(err,info)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(info)
//     }
// })

// reading file synchronos way

// const fs=require('fs')
// const data=fs.readFileSync("a.txt",'utf-8')
// console.log(data)

// appending data

// const fs=require('fs')
// fs.appendFile("a.txt","ranjith",(err,info)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(info)
//     }
// })

// const fs=require('fs')
// const data=fs.existsSync("a.txt")
// console.log(data)


const fs=require('fs')
const data=fs.unlinkSync("a.txt")
console.log(data)
