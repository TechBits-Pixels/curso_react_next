import { useState } from "react"

import classes from "@/styles/Contact.module.css"

export default function Contact() {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')

  const handleCambioNombre = (event) => {
    setNombre(event.target.value)
  }

  const handleCambioEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
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
            <label htmlFor="textarea_field">Mensaje</label>
            <textarea id="textarea_field" className="nes-textarea"></textarea>
          </div>
          <div className={`nes-field ${classes.boton}`}>
            <button type="submit" className="nes-btn is-primary">Enviar!</button>
          </div>
        </form>
      </div>
    </>
  )
}