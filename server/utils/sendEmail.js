import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendAppointmentNotification = async (appointment) => {
  const { fullName, phone, email, service, preferredDate, message } = appointment;
  const dateStr = new Date(preferredDate).toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const mailOptions = {
    from: `"Canxest Healthcare" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Appointment: ${fullName} — ${service}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1A237E; padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Appointment Request</h1>
          <p style="color: #B3C5FF; margin: 4px 0 0;">Canxest Healthcare</p>
        </div>
        <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 140px;">Patient Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">${fullName}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">${phone}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${email || 'Not provided'}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><span style="background: #EDE8F5; color: #1A237E; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: bold;">${service}</span></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Preferred Date</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1A237E;">${dateStr}</td></tr>
            ${message ? `<tr><td style="padding: 10px 0; color: #64748b; vertical-align: top;">Message</td><td style="padding: 10px 0;">${message}</td></tr>` : ''}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #EDE8F5; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #1A237E; font-weight: bold;">Please confirm this appointment within 2 hours.</p>
            <p style="margin: 8px 0 0; color: #64748b; font-size: 14px;">Call: <a href="tel:8105815577" style="color: #F06292;">8105815577</a></p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error('Email send error:', err.message);
  }
};

export const sendContactNotification = async (contact) => {
  const { fullName, phone, service, message } = contact;

  const mailOptions = {
    from: `"Canxest Healthcare" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Inquiry: ${fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1A237E; padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Inquiry</h1>
          <p style="color: #B3C5FF; margin: 4px 0 0;">Canxest Healthcare</p>
        </div>
        <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 140px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">${fullName}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">${phone}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${service || 'Not specified'}</td></tr>
            ${message ? `<tr><td style="padding: 10px 0; color: #64748b; vertical-align: top;">Message</td><td style="padding: 10px 0;">${message}</td></tr>` : ''}
          </table>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error('Email send error:', err.message);
  }
};
