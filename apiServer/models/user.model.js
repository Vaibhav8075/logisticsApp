import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false, // never return password by default
    },

    role: {
      type: String,
      enum: ["admin", "manager", "staff"],
      default: "staff",
    },

    permissions: [
      {
        type: String, 
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },

    loginLogs: [
      {
        timestamp: { type: Date, default: Date.now },
        ip: String,
        userAgent: String,
      },
    ],

    lastLogin: { type: Date },

    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    updatedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
