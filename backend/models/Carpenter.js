import mongoose from 'mongoose';

const CarpenterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true }
});

const carpenter =mongoose.model("Carpenter", CarpenterSchema);
export default carpenter;
