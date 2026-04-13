/**
 * Run once to create the first admin user:
 *   node server/utils/seedAdmin.js
 * Then DELETE this file.
 */
import 'dotenv/config';
import mongoose from 'mongoose';
import Admin from '../models/Admin.js';

await mongoose.connect(process.env.MONGODB_URI);

const existing = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
if (existing) {
  console.log('Admin already exists:', existing.email);
} else {
  await Admin.create({ email: process.env.ADMIN_EMAIL, password: 'Canxest@2026' });
  console.log('Admin created:', process.env.ADMIN_EMAIL, '| Password: Canxest@2026');
  console.log('CHANGE PASSWORD AFTER FIRST LOGIN — delete this file!');
}

await mongoose.disconnect();
process.exit(0);
