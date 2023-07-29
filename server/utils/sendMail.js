const nodemailer = require("nodemailer");

// Create a reusable transporter object outside the function
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  debug: true,
  host: process.env.SMPT_HOST,
  port: process.env.SMPT_PORT,
  service: process.env.SMPT_SERVICE,
  auth: {
    user: process.env.SMPT_MAIL,
    pass: process.env.SMPT_PASSWORD,
  },
});

// Wrap the sendMail function in a try-catch block to handle errors
const sendMail = async (options) => {
  try {
    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };

    // Use async/await for sending the email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully.");
    return true; // Return true to indicate success if needed
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Return false to indicate failure if needed
  }
};

module.exports = sendMail;
