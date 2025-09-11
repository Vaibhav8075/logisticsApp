import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  line1: { type: String, required: true },
  line2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String },
  country: { type: String, default: "India" }
}, { _id: false });

export default addressSchema;
