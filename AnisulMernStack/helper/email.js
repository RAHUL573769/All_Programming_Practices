const nodemailer = require("nodemailer");
const { smtpUserName, smtpPass } = require("../secret");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: smtpUserName,
    pass: smtpPass
  }
});

const sendEmailUsingNodemailer = async (emailData) => {
  try {
    const mailOptions = {
      from: smtpUserName, // sender address
      to: emailData.email, // list of receivers
      subject: emailData.subject, // Subject line
      text: "Hello world?", // plain text body
      html: emailData.html // html body
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(info);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendEmailUsingNodemailer };
