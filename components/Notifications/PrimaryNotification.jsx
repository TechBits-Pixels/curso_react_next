import classes from './PrimaryNotification.module.css'

export default function PrimaryNotification({ message }) {
  return (
    <div className={`nes-container is-rounded ${classes.container}`}> 
      { message }
    </div>
  )
}