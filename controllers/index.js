const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'emmanuelle81@ethereal.email',
        pass: '1Z3MgrBeZ5hR3C8ra6'
    }
})

const handleSendEmailController = async (req,res) => {
    try{
        const {name,email,message} =  req.body;
        if(!name || !email || !message){
            return res.status(400).json({
                success:false,
                message:'Please provide all the details'
            })
        }

        transporter.sendMail({
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
        return res.status(200).json({
            success: true,
            message:"Your Email send Successfully",
        })
    } catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message:"server side error"
        })
    }
}

module.exports = {
    handleSendEmailController
}