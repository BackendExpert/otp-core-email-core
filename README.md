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


## 📁 Package Exports

```js

const {
  defaultLoginOTPEmail,
  genarateOTP,
  sendEmail
} = require("otp-core-email-core");

```

| Function               | Description                     |
|------------------------|---------------------------------|
| `generateOTP(length)`  | Generates a secure one-time password (OTP) |
| `defaultLoginOTPEmail()`  | Sends a styled OTP login email |
| `sendEmail()`  | Low-level email sending utility |

## 🔐 Generate OTP

```js

const { genarateOTP } = require("otp-core-email-core");

const otp = genarateOTP();      // default length: 8
const otp6 = genarateOTP(6);    // custom length

```

## 📧 Send OTP Login Email (Recommended)

- This is the main function of the package.

```js

const { defaultLoginOTPEmail, genarateOTP } =
  require("otp-core-email-core");

const otp = genarateOTP();

await defaultLoginOTPEmail({
  email: "user@example.com",
  otp,
  project: "My Application"
});


```

### What it does

- Uses a modern HTML email template

- Sends a password-less login OTP

- Displays project branding

- Explains OTP expiration and security

## 📨 Send Custom Email (Optional)

- You can also use the raw email sender.

```js

const { sendEmail } = require("otp-core-email-core");

await sendEmail({
  project: "My App",
  to: "user@example.com",
  subject: "Welcome!",
  html: "<h1>Hello World</h1>"
});

```

## 🧱 MVC Example (Express Controller)

```js

const {
  defaultLoginOTPEmail,
  genarateOTP
} = require("otp-core-email-core");

exports.sendLoginOTP = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email required" });
    }

    const otp = genarateOTP();

    await defaultLoginOTPEmail({
      email,
      otp,
      project: "MVC OTP App"
    });

    res.json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send OTP" });
  }
};


```

## 🛡️ Security Notes

- OTPs are random and unpredictable

- Email explains expiration rules

- No passwords are stored

- Recommended to:

- - Store OTP hash in DB / Redis

- - Add rate-limiting on OTP requests


## 🧠 Design Decisions

- No global variables

- No framework coupling

- No .env handling inside library

- Clean separation of concerns

- Ready for production & scaling


## 👨‍💻 Author    

- Jehan Weerasurit