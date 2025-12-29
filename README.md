# Core functions for Genarate OTP and Send Email

## About NPM

Core utilities for OTP generation and sending secure login emails using Node.js and Nodemailer.
Designed for MVC backends, Express apps, and password-less authentication flows.

## ✨ Features

- 🔐 Secure OTP generation

- 📧 Beautiful, production-ready OTP email template

- ⚡ Simple API (plug & play)

- 🧩 MVC-friendly (Controller → Service → Utility)

- 🔄 Reusable email sender

- 🚀 Works with Gmail SMTP (extensible)


## 🔧 Requirements

- Your host application must provide the following environment variables:

```env

EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

```

- The package does NOT manage .env files — this is intentional and follows npm best practices
