import mongoose from "mongoose";

const stockSnapSchema = new mongoose.Schema(
  {
    itemType: {
      type: String,
      enum: ["rawMaterial", "product"],
      required: true,
      index: true,
    },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "itemType", 
      index: true,
    },
    locationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: true,
      index: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    asOf: {
      type: Date,
      default: Date.now,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

stockSnapSchema.index({ itemType: 1, itemId: 1, locationId: 1 }, { unique: true });

export default mongoose.model("StockSnap", stockSnapSchema);
