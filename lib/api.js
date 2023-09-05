// fs: módulo para leer archivos
// npm i fs
import fs from 'fs'
// join: módulo para unir rutas
import { join } from 'path'
// matter: módulo para leer metadatos de archivos
// npm i gray-matter
import matter from 'gray-matter'

// Vamos a obtener el directorio donde están los posts
const directorioPosts = join(process.cwd(), 'posts')

// Vamos a obtener los slugs de los posts (nombres)
export function getPostSlugs() {
  // La función readdirSync lee el contenido de un directorio y 
  // devuelve un array con los nombres de los archivos
  return fs.readdirSync(directorioPosts)
}

// Vamos a obtener el contenido de un post por su slug
// Le pasamos los campos que queremos obtener (autor, titulo, etc.)
export function getPostBySlug(slug, campos) {
  // Vamos a obtener el nombre real del archivo
  const slugReal = slug.replace(/\.md$/, '')
  // Vamos a obtener la ruta completa del archivo
  const rutaCompleta = join(directorioPosts, `${slugReal}.md`)
  // Vamos a obtener el contenido del archivo
  const contenidoArchivo = fs.readFileSync(rutaCompleta, 'utf8')
  // Vamos a obtener los metadatos del archivo
  const { data, content } = matter(contenidoArchivo)

  const elementos = {}

  // Vamos a obtener los campos que nos interesan
  campos.forEach((campo) => {
    // Si el campo es el slug, vamos a obtener el nombre real
    if (campo === 'slug') {
      elementos[campo] = slugReal
    }
    // Si el campo es el contenido, vamos a obtener el contenido
    if (campo === 'content') {
      elementos[campo] = content
    }
    if (typeof data[campo] !== 'undefined') {
      elementos[campo] = data[campo]
    }
  })

  // Devolvemos los elementos
  return elementos
}

// Vamos a obtener todos los posts
export function getAllPosts(campos) {
  // Vamos a obtener los slugs de los posts
  const slugs = getPostSlugs()
  // Vamos a obtener los posts
  const posts = slugs
    .map((slug) => getPostBySlug(slug, campos)) // get post by slug
    // ordenamos los posts por fecha
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  // Devolvemos los posts
  return posts
}