const mongoose=require("mongoose")

mongoose
.connect
("mongodb+srv://yasminkotb21:qq1s6XeM7ET3yjsN@cluster0.oldbaoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
 console.log("Database is connected successfuly")

})
.catch(()=>{
    console.log("connection to database failed!")
})

module.exports=mongoose