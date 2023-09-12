import { useState } from "react"

import classes from "@/styles/Contact.module.css"

import ErrorNotification from "@/components/Notifications/ErrorNotification"
import SuccessNotification from "@/components/Notifications/SuccessNotification"
import PrimaryNotification from "@/components/Notifications/PrimaryNotification"
import { set } from "date-fns"

export default function Contact() {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [asunto, setAsunto] = useState('')
  const [mensaje, setMensaje] = useState('')

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCambioNombre = (event) => {
    setNombre(event.target.value)
  }

  const handleCambioEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleCambioAsunto = (event) => {
    setAsunto(event.target.value)
  }

  const handleCambioMensaje = (event) => {
    setMensaje(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!nombre) {
      setError('El nombre es obligatorio')
      return
    }

    if (!email) {
      setError('El email es obligatorio')
      return
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (!emailRegex.test(email)) {
      setError('El email no es valido')
      return
    }

    if (!asunto) {
      setError('El asunto es obligatorio')
      return
    }

    if (!mensaje) {
      setError('El mensaje es obligatorio')
      return
    }

    const datos = {
      nombre,
      email,
      asunto,
      mensaje
    }

    setLoading(true)

    const resultado = await fetch('/api/emailSender', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })

    const { error } = await resultado.json()

    if (error) {
      setLoading(false)
      setInterval(() => {
        setError('')
      }, 3000)
      setError(error)
      return
    }

    setInterval(() => {
      setSuccess('')
    }, 3000)
    setSuccess('Mensaje enviado')
    setLoading(false)

    setNombre('')
    setEmail('')
    setAsunto('')
    setMensaje('')

  }

  return (
    <>
      {error && <ErrorNotification message={error} />}
      {success && <SuccessNotification message={success} />}
      {loading && <PrimaryNotification message="Loading..." />}
      <div className={classes.container}>
        <form className={`nes-container is-rounded ${classes.form}`} onSubmit={handleSubmit}>
          <h1 className={classes.titulo}>Contactanos</h1>
          <div className={`nes-field ${classes.grupo}`}>
            <label htmlFor="name_field">Tu nombre</label>
            <input type="text" id="name_field" className="nes-input" onChange={handleCambioNombre} value={nombre} />
          </div>
          <div className={`nes-field ${classes.grupo}`}>
            <label htmlFor="name_field">Tu correo</label>
            <input type="email" id="email_field" className="nes-input" onChange={handleCambioEmail} value={email} />
          </div>
          <div className={`nes-field ${classes.grupo}`}>
            <label htmlFor="name_field">Asunto</label>
            <input type="text" id="name_field" className="nes-input" onChange={handleCambioAsunto} value={asunto}/>
          </div>
          <div className={`nes-field ${classes.grupo}`}>
            <label htmlFor="textarea_field">Mensaje</label>
            <textarea id="textarea_field" className="nes-textarea" onChange={handleCambioMensaje} value={mensaje}></textarea>
          </div>
          <div className={`nes-field ${classes.boton}`}>
            <button type="submit" className="nes-btn is-primary">Enviar!</button>
          </div>
        </form>
      </div>
    </>
  )
} 