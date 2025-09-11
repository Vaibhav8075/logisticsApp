import mongoose from "mongoose";

const inventoryMoveSchema = new mongoose.Schema(
    {
       items: [
        {
          itemType: {
            type: String,
            required: true,
            enum: ["RawMaterial", "Product"] 
          },
          itemId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            refPath: "items.itemType" 
          },
          quantity: { type: Number, required: true, min: 0 },
          unitCost: { type: Number, required: true, min: 0 },
        }
      ],
       reason: { 
        type: String,
        required: true,
     },
       Location: { type: String },
        date : {type: Date(), default: new Date()},
        linkedEvents: [
            {
             eventType: {type: String, required: true, enum: ["ProductionLog", "Delivery", "InventoryMove", "Bill"]}, 
             eventId: {type: mongoose.Schema.Types.ObjectId, required: true, refPath: "linkedEvents.eventType"},  
            }
        ]
    },
)

const InventoryMove = mongoose.model("InventoryMove", inventoryMoveSchema);
export default InventoryMove;