import express from 'express';
import Slot from "../models/Slot.js"

const router = express.Router();

// Create a slot
router.post("/", async (req, res) => {
  try {
    const { carpenterId, date, time } = req.body;
    const slot = new Slot({ carpenterId, date, time });
    await slot.save();
    res.status(201).json({ message: "Slot created successfully", slot });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all available slots
router.get("/", async (req, res) => {
  try {
    const { carpenterId, date } = req.query;
    const query = { isBooked: false };

    if (carpenterId) query.carpenterId = carpenterId;
    if (date) query.date = date;

    const slots = await Slot.find(query).populate("carpenterId");
    res.status(200).json(slots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get a slot by ID
router.get("/:id", async (req, res) => {
  try {
    const slot = await Slot.findById(req.params.id).populate("carpenterId");
    if (!slot) return res.status(404).json({ message: "Slot not found" });
    res.status(200).json(slot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a slot by ID
router.delete("/:id", async (req, res) => {
  try {
    const slot = await Slot.findByIdAndDelete(req.params.id);
    if (!slot) return res.status(404).json({ message: "Slot not found" });
    res.status(200).json({ message: "Slot deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
