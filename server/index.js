import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';

import appointmentRoutes from './routes/appointmentRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

// ✅ Security Middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || '*', // allow frontend in production
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// ✅ Rate Limiting (Protect APIs)
app.use(
  '/api/appointments',
  rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: { error: 'Too many requests. Try again in a minute.' },
  })
);

app.use(
  '/api/contact',
  rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: { error: 'Too many requests. Try again in a minute.' },
  })
);

// ✅ Root Route (for Render check)
app.get('/', (_req, res) => {
  res.send('Canxest Healthcare API is running 🚀');
});

// ✅ Health Check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'Canxest Healthcare API' });
});

// ✅ API Routes
app.use('/api/appointments', appointmentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);

// ❌ 404 Handler
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found.' });
});

// ✅ Server + DB Connection
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ DB connection failed:', err);
    process.exit(1);
  });