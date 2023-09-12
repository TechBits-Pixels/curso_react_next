import classes from './SuccessNotification.module.css'

export default function SuccessNotification({ message }) {
  return (
    <div className={`nes-container is-rounded ${classes.container}`}> 
      { message }
    </div>
  )
}