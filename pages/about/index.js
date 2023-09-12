import classes from '@/styles/About.module.css'
import openSans from '../_app'

export default function About() {
  return (
    <div className={classes.acercaDe}>
      <h1 className={classes.titulo}>Acerca de Nosotros</h1>
      <article className={openSans.className}>
        <p className={classes.parrafo}>
          ¡Hola a todos y todas! Estamos emocionados de darles la bienvenida a nuestro nuevo rincón virtual, Technobits & Pixels. Aquí encontrarás un fascinante mundo donde convergen la tecnología, la programación, la ciencia y los videojuegos.
        </p>
        <p className={classes.parrafo}>
          Somos un equipo apasionado por explorar los avances tecnológicos, descubrir las maravillas de la programación, desentrañar los misterios de la ciencia y sumergirnos en la diversión y creatividad de los videojuegos. Nuestra misión es compartir conocimiento, debatir ideas y construir una comunidad vibrante de mentes curiosas y ávidas de aprender.
        </p>
        <p className={classes.parrafo}>
          Así que, si eres un entusiasta de la tecnología, un apasionado de la programación, un curioso de la ciencia o un ávido jugador, este es el lugar perfecto para ti. Únete a nosotros en esta emocionante aventura mientras exploramos el fascinante mundo de Technobits & Pixels.
        </p>
        <p className={classes.parrafo}>
          ¡Gracias por acompañarnos en este emocionante viaje tecnológico! Esperamos que disfrutes de cada artículo, que encuentres inspiración y que juntos formemos una comunidad sólida donde todos podamos aprender y crecer.
        </p>
        <p className={classes.parrafo}>
          Bienvenidos a Technobits & Pixels, donde la pasión por la tecnología se une con el encanto de los pixels. ¡Comienza la aventura! 
        </p>
      </article>
    </div>
  )
}