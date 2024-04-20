
const mongoose=require("mongoose")

mongoose
.connect
("mongodb+srv://yasminkotb21:yas123@cluster0.oldbaoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
 console.log("Database is connected successfuly")

})
.catch(()=>{
    console.log("connection to database failed!")
})