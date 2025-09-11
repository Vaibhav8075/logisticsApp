import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  designation: { type: String }
}, { _id: false });

export default contactSchema;
