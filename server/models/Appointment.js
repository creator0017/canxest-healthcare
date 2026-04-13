import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  phone:    { type: String, required: true },
  email:    { type: String, trim: true, lowercase: true },
  service:  {
    type: String, required: true,
    enum: ['Oncology Consultation','Surgical Procedure','Lab Test at Home','Medical Certificate','Second Opinion'],
    default: 'Oncology Consultation',
  },
  preferredDate: { type: Date, required: true },
  message:  { type: String, trim: true },
  status:   {
    type: String, default: 'pending',
    enum: ['pending','confirmed','cancelled','completed'],
  },
  source: { type: String, default: 'website' },
}, { timestamps: true });

export default mongoose.model('Appointment', AppointmentSchema);
