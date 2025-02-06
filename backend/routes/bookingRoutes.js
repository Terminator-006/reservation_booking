import express from 'express';
import Booking from "../models/Booking.js";
import Slot from "../models/Slot.js";
import Carpenter from "../models/Carpenter.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userId, slotId, carpenterId } = req.body;

    // Check if slot exists and is available
    const slot = await Slot.findById(slotId);
    if (!slot) return res.status(404).json({ message: "Slot not found" });

    if (slot.isBooked) {
      return res.status(400).json({ message: "Slot is already booked" });
    }

    // Check if the same user already booked this slot
    const existingBooking = await Booking.findOne({ userId, slotId });
    if (existingBooking) {
      return res.status(400).json({ message: "You have already booked this slot" });
    }

    // Create booking
    const booking = new Booking({ userId, slotId, carpenterId, status: "confirmed" });
    await booking.save();

    // Mark slot as booked
    slot.isBooked = true;
    await slot.save();

    res.status(201).json({ message: "Booking confirmed", booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Cancel a booking
router.put("/:id/cancel", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    // Mark booking as canceled
    booking.status = "canceled";
    await booking.save();

    // Free up the slot
    await Slot.findByIdAndUpdate(booking.slotId, { isBooked: false });

    res.status(200).json({ message: "Booking canceled successfully", booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
 export default router;