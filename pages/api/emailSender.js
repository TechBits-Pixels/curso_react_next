import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo no permitido, usa POST para esta ruta' })
  }

  const { nombre, email, asunto, mensaje } = req.body

  if (!nombre || !email || !asunto || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos por llenar' })
  }

  try {
    await sendgrid.send({
      to: "yeyomoreno2003@hotmail.com",
      from: "yeyomoreno2003@hotmail.com",
      subject: `Nuevo mensaje de ${nombre}: ${asunto}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="es">
      <head>
        <meta charset="utf-8">
        <title>Correo Technobits Pixels</title>
        <meta name="description" content="Correo Technobits Pixels">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      <body>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
          <h3>Nuevo email de ${nombre}, su email es: ✉️${email} </h3>
          <div style="font-size: 16px;">
            <p>Mensaje:</p>
            <p>${mensaje}</p>
          </div>
        </div>
      </body>
      </html>`,
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ mensaje: 'Email enviado' })
}