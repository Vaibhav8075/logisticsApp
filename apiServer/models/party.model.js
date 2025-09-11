import mongoose from "mongoose";
import addressSchema from "./common/address.schema.js";
import contactSchema from "./common/contact.schema.js";
import bankingSchema from "./common/banking.schema.js";

const partySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  partyCode: { type: String, unique: true, sparse: true },
  type: { type: String, enum: ["buyer", "supplier", "both"], required: true },
  address: addressSchema,
  contactStore: [contactSchema],
  gstNum: { type: String, trim: true },
  bankingDetails: [bankingSchema],   
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.model("Party", partySchema);
