const mongoose=require("mongoose")
const Schema = mongoose.Schema
const noteSchema=new Schema ({
    title:String,
    content:String,
    creator:String,
    category:String
  
})

const Note=mongoose.model("Note",scriptSchema)
module.exports=Note