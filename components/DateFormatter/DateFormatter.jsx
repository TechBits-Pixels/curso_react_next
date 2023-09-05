// parseISO: Converts a date string in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ) to a Date object.
// format: Formatea una fecha de acuerdo a un formato dado
// npm i date-fns
import { parseISO, format } from 'date-fns'

export const DateFormatter = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={ dateString }>{format(date, 'LLLL	d, yyyy')}</time>
}