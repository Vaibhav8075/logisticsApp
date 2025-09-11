import mongoose from "mongoose";

const productionLog = new mongoose.Schema(
    {
        productId:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        isPackaged: {
            type: Boolean,
            reequired: true,
        },
        quantity:{
            type: Number,
            required: true,
        },
        location:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Location",
            required: true,
        },
        defectiveQuantity:{
            type: Number,
            default: 0,
        },
        notes:{
            type: String,
        },
    },
    {timestamps:true},
);

const ProductionLog = mongoose.model("ProductionLog", productionLog);

export default ProductionLog;