import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
code: {
    type: Number,
    required: true
},
name: {
    type: String,
    required: true
}


});

export const departmentModel = mongoose.model("department", departmentSchema);