import mongoose from "mongoose";

const bankingSchema = new mongoose.Schema({
  type: { 
    type: String, 
    enum: ["bank", "upi", "wallet"], 
    required: true 
  },
  accountNumber: { type: String },   
  ifsc: { type: String },            
  bankName: { type: String },        
  branch: { type: String },          
  upiId: { type: String },           
  walletProvider: { type: String },  
  notes: { type: String }            
}, { _id: false });

export default bankingSchema;
