import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure email transporter
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Test email configuration
transporter.verify((error, success) => {
    if (error) {
        console.log('❌ Email configuration error:', error);
    } else {
        console.log('✅ Email service is ready to send emails');
    }
});

// Contact form endpoint
app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'Please fill in all required fields' 
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            success: false, 
            message: 'Please enter a valid email address' 
        });
    }

    try {
        // Email to owner
        const ownerMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #b89e5a;">New Message from Contact Form</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap; color: #333;">${message}</p>
                    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
                    <p style="color: #999; font-size: 12px;">This email was sent from your website's contact form.</p>
                </div>
            `,
        };

        // Confirmation email to user
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'We received your message - Manovaa Designs',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #b89e5a;">Thank You for Reaching Out!</h2>
                    <p>Hi ${name},</p>
                    <p>We have received your message and appreciate you contacting us. Our team will review your inquiry and get back to you as soon as possible.</p>
                    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
                    <p><strong>Your Message:</strong></p>
                    <p style="white-space: pre-wrap; color: #333; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
                    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
                    <p style="color: #999; font-size: 12px;">Best regards,<br>Manovaa Designs Team</p>
                </div>
            `,
        };

        // Send both emails
        await transporter.sendMail(ownerMailOptions);
        await transporter.sendMail(userMailOptions);

        res.status(200).json({ 
            success: true, 
            message: 'Email sent successfully! We will get back to you soon.' 
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send email. Please try again later.' 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📧 Email endpoint available at http://localhost:${PORT}/api/send-email`);
});
