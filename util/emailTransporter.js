const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

exports.sendEmail = async ({ project, to, subject, html, attachments }) => {
    try {
        const info = await transporter.sendMail({
            from: `"${project}" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html,
            attachments: attachments || [],
        });
        console.log("Email sent:", info.messageId);
        return true;
    } catch (err) {
        console.error("Email error:", err.message);
        return false;
    }
};

