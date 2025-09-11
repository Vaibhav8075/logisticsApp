import mongoose from "mongoose";
import addressSchema from "./common/address.model.js";
import contactSchema from "./common/contact.model.js";

const locationSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: true,
            enum: ["factory", "warehouse", "office"],
        },
        address: {
            type: addressSchema,
            required: true,
        },
        contact:{
            type: contactSchema,
        },
        capacity:{
            type: Number,
        },
        notes:{
            type: String,
            maxLength: 200,
        },
        status: {
            type: String,
            required: true,
            enum:["Actice", "Maintainance", "Inactive"],
        },
    }
)