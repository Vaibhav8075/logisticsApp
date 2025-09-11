import mongoose from "mongoose";


const BillSchema = new mongoose.Schema({
    refId:{type: String},
  category: {
    type: String,
    enum: ["toll", "tax", "expenses", "maintenance"],
    required: true
  },
  amount: { type: Number, required: true, min: 0 },
  type: {
    type: String,
    enum: ["credit", "debit"],
    required: true
  },
  party: {
    name: { type: String, required: true },
    partyId: { type: mongoose.Schema.Types.ObjectId, ref: "Party" },
  },
  dueDate: { type: Date },
 items: [
  {
    itemType: {
      type: String,
      required: true,
      enum: ["RawMaterial", "Product"] // decides which collection to reference
    },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "items.itemType" 
    },
    quantity: { type: Number, required: true, min: 0 },
    price: { type: Number, required: true, min: 0 },
    total: { type: Number, required: true, min: 0 } // can auto-calc
  }
],

  notes: { type: String },
  paymentMethod: { type: String }, 
  paymentDate: { type: Date },
  status: {
    type: String,
    enum: ["pending", "late", "paid"],
    default: "pending"
  },
  photo_url: { type: String }
}, { timestamps: true });

BillSchema.pre("save", function(next) {
    
  if (this.items && this.items.length > 0) {
    this.amount = 0;
    this.items.forEach(item => {
      item.total = item.quantity * item.price;
      this.amount += item.total;
    });
  }
  next();
});

const Bill = model("Bill", BillSchema);
export default Bill;
