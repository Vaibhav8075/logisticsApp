import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
    {
        category: { 
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        locationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Location",
        },
        serviceRecords:[
            {
               date: {
                type: Date(),
               },
               bills: [{
                    bill:{
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Bill",
                    },
                    note:{
                        type: String,
                        maxLength: 200,
                    }
                }]
            }
        ],
        purchaseDate: {
            type: Date(),
        },
        cost:{
            type: Number,
        },
        notes: { 
            type: String,
        },
        status: {
            type: String,
            enum:["Actice", "Maintainance", "Inactive"],
        },
    }
)

const Asset = new mongoose.model("Asset", assetSchema);

export default Asset;