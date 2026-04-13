import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  phone:    { type: String, required: true },
  service:  { type: String, trim: true },
  message:  { type: String, trim: true },
  status:   {
    type: String, default: 'unread',
    enum: ['unread','read','replied'],
  },
}, { timestamps: true });

export default mongoose.model('Contact', ContactSchema);
