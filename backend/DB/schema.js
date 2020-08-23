const mongoose=require('mongoose');
const schema=mongoose.Schema;

const userSchema=new schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
});

const user=mongoose.model('user',userSchema);
module.exports=user;