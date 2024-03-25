const nodemailer = require('nodemailer');

// Función para enviar el correo electrónico
async function sendEmail(subject, body) {
    // Configuración del transporte
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'uci.lmgarcia@gmail.com',
            pass: ''
        }
    });

    // Opciones del correo electrónico
    let mailOptions = {
        from: 'uci.lmgarcia@gmail.com',
        to: 'uci.lmgarcia@gmail.com',
        subject: subject,
        text: body
    };

    // Envío del correo electrónico
    let info = await transporter.sendMail(mailOptions);

    console.log('Correo electrónico enviado: %s', info.messageId);
}

module.exports = { sendEmail };
