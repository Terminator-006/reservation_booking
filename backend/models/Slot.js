import mongoose from 'mongoose';
const SlotSchema = new mongoose.Schema({
    carpenterId: { type: mongoose.Schema.Types.ObjectId, ref: "Carpenter", required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true }, // Example: "09:00 AM"
    isBooked: { type: Boolean, default: false }
  });
  
  const slot = mongoose.model("Slot", SlotSchema);
  export default slot;
  