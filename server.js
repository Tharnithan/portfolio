const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email address'
        });
    }

    // Email options
    const mailOptions = {
        from: email,
        to: 'tharni375@email.com', // Your email
        subject: `Portfolio Contact: ${subject}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
                <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <h2 style="color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px;">New Contact Form Submission</h2>
                    
                    <div style="margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong style="color: #333;">Name:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong style="color: #333;">Email:</strong> ${email}</p>
                        <p style="margin: 10px 0;"><strong style="color: #333;">Subject:</strong> ${subject}</p>
                    </div>
                    
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
                        <h3 style="color: #333; margin-top: 0;">Message:</h3>
                        <p style="color: #555; line-height: 1.6;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
                        <p>This message was sent from your portfolio website contact form.</p>
                        <p>Sent on: ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            </div>
        `,
        replyTo: email
    };

    // Auto-reply options
    const autoReplyOptions = {
        from: 'tharni375@email.com',
        to: email,
        subject: 'Thank you for contacting me!',
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
                <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <h2 style="color: #667eea;">Thank You for Reaching Out!</h2>
                    
                    <p style="color: #555; line-height: 1.6;">Hi ${name},</p>
                    
                    <p style="color: #555; line-height: 1.6;">
                        Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.
                    </p>
                    
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
                        <p style="color: #777;"><strong>Subject:</strong> ${subject}</p>
                        <p style="color: #555; line-height: 1.6;">${message}</p>
                    </div>
                    
                    <p style="color: #555; line-height: 1.6;">
                        Best regards,<br>
                        <strong style="color: #667eea;">Tharnithan Tharmakulasingam</strong><br>
                        Mobile App Developer & Software Engineer
                    </p>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
                        <p style="color: #888; font-size: 12px; margin: 5px 0;">
                            📧 Email: tharni375@email.com<br>
                            📱 Phone: +94 76 661 5954<br>
                            🌐 Location: Point Pedro, Sri Lanka
                        </p>
                    </div>
                </div>
            </div>
        `
    };

    try {
        // Send email to you
        await transporter.sendMail(mailOptions);
        
        // Send auto-reply to sender
        await transporter.sendMail(autoReplyOptions);

        res.status(200).json({
            success: true,
            message: 'Message sent successfully! Thank you for reaching out.'
        });
    } catch (error) {
        console.error('Email error:', error);
        
        // Even if email fails, we still acknowledge receipt
        // This is temporary until Gmail App Password is fixed
        console.log('\n📬 MESSAGE RECEIVED (Email sending failed):');
        console.log('From:', name, `<${email}>`);
        console.log('Subject:', subject);
        console.log('Message:', message);
        console.log('\n');
        
        res.status(200).json({
            success: true,
            message: 'Message received! I will get back to you soon. (Note: Email notification is currently unavailable, but your message was logged.)'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Portfolio backend is running!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`🌐 API endpoint: http://localhost:${PORT}/api/contact`);
});
