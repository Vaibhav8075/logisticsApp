import mongoose from "mongoose";



const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    code: {
      type: String,
      unique: true,
      sparse: true, 
    },
    unit: {
      type: String,
      required: true,
    },
    salesPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    targetSalesPrice: {
      type: Number,
      min: 0,
    },
    rawMaterialsUsed: [
      {
        rawMaterialId: {
          type: Schema.Types.ObjectId,
          ref: "RawMaterial",
          required: true,
        },
        quantityPerUnit: {
          type: Number,
          required: true,
          min: 0,
        },
        unit: {
          type: String,
          required: true,
        },
      },
    ],
    byProducts: [
      {
        name: { type: String, required: true },
        producePerUnit: { type: Number, required: true, min: 0 },
        unit: { type: String, required: true },
      },
    ],
    stock: {
      packaged: { type: Number, default: 0, min: 0 },
      toBePackaged: { type: Number, default: 0, min: 0 },
    },
    productionRate: {
      type: Number,
      default: 0, // units per day or cycle
      min: 0,
    },

    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    updatedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true, 
  }
);

productSchema.virtual("costPerUnit").get(function () {
  if (!this.rawMaterialsUsed) return 0;
  return this.rawMaterialsUsed.reduce((total, item) => {
    if (item.rawMaterialId?.costPerUnit) {
      return total + item.rawMaterialId.costPerUnit * item.quantityPerUnit;
    }
    return total;
  }, 0);
});

productSchema.set("toJSON", { virtuals: true });
productSchema.set("toObject", { virtuals: true });

const Product = mongoose.model("Product", productSchema);
export default Product;
