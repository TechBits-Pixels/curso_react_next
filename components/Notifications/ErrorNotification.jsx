import classes from './ErrorNotification.module.css'

export default function ErrorNotification({ message }) {
  return (
    <div className={`nes-container is-rounded ${classes.container}`}> 
      { message }
    </div>
  )
}