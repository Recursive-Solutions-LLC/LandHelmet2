import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    try {
        const {subject, contactName, contactEmail, contactMessage, contactPhoneNumber} = await req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'infosendform@gmail.com', 
                pass: 'jxqceljxsmvuhsnx',
            },
        });

        const mailOptions = {
            from: 'infosendform@gmail.com', // Cambia esto por tu dirección de correo electrónico
            to: 'infosendform@gmail.com',
            subject: `Message sent by ${contactName }`,
            text: `Name: ${contactName }\nSubject: ${subject}\nEmail: ${contactEmail}\nPhone: ${contactPhoneNumber}\nMessage: ${contactMessage}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Email Sent Succesfully" });
    } catch (error) {


        res.status(500).json({ message: error });

    }
}