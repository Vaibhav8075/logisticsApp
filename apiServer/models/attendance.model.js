import mongoose from "mongoose";


const AttendanceSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee", 
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  inTime: { type: Date }, 
  outTime: { type: Date }, 
  status: {
    type: String,
    enum: ["present", "absent", "leave"],
    default: "present"
  },
  hoursWorked: { type: Number, default: 0 }
}, { timestamps: true });

AttendanceSchema.pre("save", function(next) {
  if (this.inTime && this.outTime) {
    const totalMs = this.outTime - this.inTime;
    this.hoursWorked = totalMs / (1000 * 60 * 60); 
  }
  next();
});

export const Attendance = mongoose.model("Attendance", AttendanceSchema);
