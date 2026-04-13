import Appointment from '../models/Appointment.js';
import { sendAppointmentNotification } from '../utils/sendEmail.js';

export const createAppointment = async (req, res) => {
  try {
    const { name, fullName, phone, email, service, date, preferredDate, message } = req.body;
    const appt = await Appointment.create({
      fullName: fullName || name,
      phone,
      email,
      service,
      preferredDate: preferredDate || date,
      message,
    });
    // Fire email notification (non-blocking)
    sendAppointmentNotification(appt).catch(() => {});
    res.status(201).json({
      success: true,
      message: 'Appointment booked! We will confirm your slot within 2 hours.',
      id: appt._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const { status, service, date } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (service) filter.service = service;
    if (date) {
      const d = new Date(date);
      filter.preferredDate = {
        $gte: new Date(d.setHours(0,0,0,0)),
        $lte: new Date(d.setHours(23,59,59,999)),
      };
    }
    const appointments = await Appointment.find(filter).sort({ createdAt: -1 });
    res.json({ total: appointments.length, appointments });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const appt = await Appointment.findById(req.params.id);
    if (!appt) return res.status(404).json({ error: 'Not found.' });
    res.json(appt);
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};

export const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const appt = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!appt) return res.status(404).json({ error: 'Not found.' });
    res.json({ success: true, appointment: appt });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    const appt = await Appointment.findByIdAndDelete(req.params.id);
    if (!appt) return res.status(404).json({ error: 'Not found.' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};
