import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({

code: {
    type: Number,
    required: true
},
    name:{
    type: String,
    required: true
},
lastName1: {
    type: String,
    required: true
},
lastName2: {
    type: String,
    required: String
},
departmentCode: {
    type: Number,
    required: true
}

    

});

export const employeeModel = mongoose.model("employees", employeeSchema);