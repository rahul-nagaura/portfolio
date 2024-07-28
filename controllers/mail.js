const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'emmanuelle81@ethereal.email',
        pass: '1Z3MgrBeZ5hR3C8ra6'
    }
  });

  let info = await transporter.sendMail({
    to:"rahulnagora88901@gamil.comm",
            from: `${email}`,
            subject:"sdgd",
            html: `
            <h5>Detail Information</h5>
            <ul>
                <li>name: ${name}</li>
                <li>email: ${email}</li>
                <li>Message: ${message}</li>
            </ul>
            `
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;