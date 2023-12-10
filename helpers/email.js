import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) => {
   
    const { email, nombre, token } = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
    })

    //Información del email
    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: 'UpTask - Confirma tu cuenta',
        text: 'Comprueba tu cuenta de UpTask',
        html: `<p>Hola ${nombre}, confirma tu cuenta en UpTask.</p>
        <p>Tu cuenta ya ha sido creada. Sólo falta tu confirmación en el siguiente enlace: <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar Cuenta</a></p>
        <p>Si tu no creaste la cuenta puedes ignorar este mensaje.</p>
        `,
    })
}


export const emailForgotPassword = async (datos) => {
   
    const { email, nombre, token } = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
    })

    //Información del email
    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: 'UpTask - Restablece tu password',
        text: 'Restablece tu password',
        html: `<p>Hola ${nombre}, sigue el sieguiente enlace para generar un nuevo password: <a href="${process.env.FRONTEND_URL}/forgot-password/${token}">Restablecer Password</a></p>
        <p>Si tu no solicitaste este email, puedes ignorar este mensaje.</p>
        `,
    })
}