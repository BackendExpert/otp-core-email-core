const { defaultLoginOTPEmail } = require("./core/email/defaultLoginOTPEmail");
const { genarateOTP } = require("./core/otp/genarateOTP")
// const { sendEmail } = require("./util/emailTransporter")
const sendEmail = require("./util/emailTransporter");

module.exports = {
    defaultLoginOTPEmail, genarateOTP, sendEmail
};
