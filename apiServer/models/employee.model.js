import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["worker", "manager", "driver", "admin"], 
    },
    wage: {
      amount: { type: Number, required: true, min: 0 },
      type: {
        type: String,
        enum: ["hourly", "daily", "weekly", "monthly"],
        required: true,
      },
    },
    contact: {
      phone: { type: String, required: true },
    },
    joiningDate: {
      type: Date,
      required: true,
      immutable: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true, 
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;