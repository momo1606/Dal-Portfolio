//Author: Mohammed Noor ul Hasan Kothaliya

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD 
  }
});

export const sendResetPasswordEmail = async (email, ResetLink) => {
    console.log('Sending reset password email...');
  const mailOptions = {
    from:{
        name: 'Dal Portfolio',
        address: process.env.EMAIL
    } ,
    to: email,
    subject: 'Reset Password Link',
    html: `
      <p>Please click on the following link to reset your password:</p>
      <a href="${ResetLink}">${ResetLink}</a>
      <p>This link will expire in 1 hour.</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Reset password email sent successfully.');
  } catch (error) {
    console.error('Failed to send reset password email:', error);
    throw error; 
  }
};