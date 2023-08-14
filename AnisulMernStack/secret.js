require("dotenv").config();
const mongoUrl = process.env.Mongo_URL;

const jwtKey = process.env.JWT_KEY;

const smtpUserName = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

const clientUrl = process.env.ClientUrl;
module.exports = { clientUrl, mongoUrl, jwtKey, smtpUserName, smtpPass };
