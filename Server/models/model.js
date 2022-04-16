const mongoose=require('mongoose');
const contactSchema=mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    doj:{
        type:Date,
        required:true
    }
});


const Contact=module.exports=mongoose.model('contacts',contactSchema);