// remark es un módulo que nos permite convertir Markdown a HTML
// npm i remark remark-html
import { remark } from 'remark'
// html es un módulo que nos permite convertir HTML a texto
// npm i remark-html
import html from 'remark-html'

// Vamos a convertir Markdown a HTML
export default async function markdownToHtml(markdown) {
  // Vamos a procesar el contenido de Markdown
  const result = await remark().use(html).process(markdown)
  // Devolvemos el resultado en formato texto (string)
  return result.toString()
}