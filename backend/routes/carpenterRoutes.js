import express from 'express';
import Carpenter from "../models/Carpenter.js";


const router = express.Router();

// Create a new carpenter
router.post("/", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const carpenter = new Carpenter({ name, email, phone });
    await carpenter.save();
    res.status(201).json({ message: "Carpenter added successfully", carpenter });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all carpenters
router.get("/", async (req, res) => {
  try {
    const carpenters = await Carpenter.find();
    res.status(200).json(carpenters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single carpenter by ID
router.get("/:id", async (req, res) => {
  try {
    const carpenter = await Carpenter.findById(req.params.id);
    if (!carpenter) return res.status(404).json({ message: "Carpenter not found" });
    res.status(200).json(carpenter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a carpenter by ID
router.put("/:id", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const carpenter = await Carpenter.findByIdAndUpdate(
      req.params.id,
      { name, email, phone },
      { new: true, runValidators: true }
    );
    if (!carpenter) return res.status(404).json({ message: "Carpenter not found" });
    res.status(200).json({ message: "Carpenter updated successfully", carpenter });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a carpenter by ID
router.delete("/:id", async (req, res) => {
  try {
    const carpenter = await Carpenter.findByIdAndDelete(req.params.id);
    if (!carpenter) return res.status(404).json({ message: "Carpenter not found" });
    res.status(200).json({ message: "Carpenter deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
