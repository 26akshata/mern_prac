const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    years:{
        type:Number,
        required:true
    },
    present:{
        type:Boolean,
        default:false
    }

})

module.exports = mongoose.model("employee",employeeSchema)