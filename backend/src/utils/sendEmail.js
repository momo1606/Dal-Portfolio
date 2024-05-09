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

export const sendVerificationEmail = async (email, verificationLink) => {
    console.log('Sending verification email...');
  const mailOptions = {
    from:{
        name: 'Dal Portfolio',
        address: process.env.EMAIL
    } ,
    to: email,
    subject: 'Verify your email address',
    html: `
      <p>Please click on the following link to verify your email address:</p>
      <a href="${verificationLink}">${verificationLink}</a>
      <p>This link will expire in 24 hours.</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Verification email sent successfully.');
  } catch (error) {
    console.error('Failed to send verification email:', error);
    throw error; 
  }
};