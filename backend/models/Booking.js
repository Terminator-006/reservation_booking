import mongoose from 'mongoose';
const BookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    slotId: { type: mongoose.Schema.Types.ObjectId, ref: "Slot", required: true },
    carpenterId: { type: mongoose.Schema.Types.ObjectId, ref: "Carpenter", required: true },
    status: { type: String, enum: ["confirmed", "pending", "canceled"], default: "pending" },
    bookedAt: { type: Date, default: Date.now }
  });
  
  export default mongoose.model("Booking", BookingSchema);
  