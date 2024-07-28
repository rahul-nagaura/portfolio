const nodemailer = require("nodemailer");
require("dotenv").config();

const handleSendMail = async (req, res) => {
    try {
        const { email, name, message } = req.body;
        if (!email || !name || !message) {
            return res.status(400).json({
                success: false,
                message: "Please provide all details"
            });
        }

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,  // Make sure to set MAIL_PORT in your .env file
            secure: false,  // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        let info = await transporter.sendMail({
            to: "rahulnagora88905@gmail.com",  // Corrected email address
            from: `${email}`,
            subject: "New Message",
            html: `
            <h5>Detail Information</h5>
            <ul>
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>
                <li>Message: ${message}</li>
            </ul>
            `
        });

        return res.status(200).json({
            success: true,
            message: "Mail sent successfully"
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Server side error"
        });
    }
}

module.exports = {
    handleSendMail
}
