// const nodemailer = require("nodemailer");

// const sendMail = async (options) => {
//     const transporter = nodemailer.createTransport({
//         service:"gmail",
//         secure: true,
//         host: process.env.SMPT_HOST,
//         port: process.env.SMPT_PORT,
//         service: process.env.SMPT_SERVICE,
//         auth:{
//             user: process.env.SMPT_MAIL,
//             pass: process.env.SMPT_PASSWORD,
//         },
//     });

//     const mailOptions = {
//         from: process.env.SMPT_MAIL,
//         to: options.email,
//         subject: options.subject,
//         text: options.message,
//     };

//     await transporter.sendMail(mailOptions);
// };

// module.exports = sendMail;

const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use "gmail" service directly here
    secure: true,
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
