import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  eventType: String,
  eventDate: String,
  guestCount: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Enquiry ||
  mongoose.model("Enquiry", EnquirySchema);