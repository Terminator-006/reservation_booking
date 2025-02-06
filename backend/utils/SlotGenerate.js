import Slot from "../models/Slot.js";

// Function to generate slots for carpenters
const generateSlotsForCarpenters = async () => {
  const carpenters = await Carpenter.find();
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM"
  ];

  for (const carpenter of carpenters) {
    for (const time of timeSlots) {
      const existingSlot = await Slot.findOne({ carpenterId: carpenter._id, time });
      if (!existingSlot) {
        const newSlot = new Slot({
          carpenterId: carpenter._id,
          date: new Date().toISOString().split('T')[0], // Today's date
          time,
          isBooked: false
        });
        await newSlot.save();
      }
    }
  }
};

export default generateSlotsForCarpenters;
