import Contact from '../models/Contact.js';
import { sendContactNotification } from '../utils/sendEmail.js';

export const createContact = async (req, res) => {
  try {
    const { name, fullName, phone, service, message } = req.body;
    const contact = await Contact.create({
      fullName: fullName || name,
      phone,
      service,
      message,
    });
    sendContactNotification(contact).catch(() => {});
    res.status(201).json({
      success: true,
      message: 'Message received! We will get back to you shortly.',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
};

export const getContacts = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const contacts = await Contact.find(filter).sort({ createdAt: -1 });
    res.json({ total: contacts.length, contacts });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};

export const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!contact) return res.status(404).json({ error: 'Not found.' });
    res.json({ success: true, contact });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Not found.' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};
