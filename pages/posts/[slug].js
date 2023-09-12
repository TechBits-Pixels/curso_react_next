import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import { useRouter } from 'next/router'

import ErrorPage from 'next/error'
import Head from 'next/head'

import SinglePost from '@/components/SinglePost/SinglePost'

export default function Post( post ) {

  const router = useRouter()

  const titulo = `${post.titulo} | Technobits & Pixels`

  // Si la página no esta cargada y 
  // no tenemos el slug del post
  // Retornamos un error 404
  if (!router.isFallback && !post?.titulo) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <article style={{width: '100%'}}>
            <Head>
              <title>{titulo}</title>
              <meta property="image" content={post.imagen} />
            </Head>
            <SinglePost post={post} />
          </article>
        )}
    </>
  )
}

export async function getStaticProps(params) {
  // Nececitamos pasarle los campos al la funcion
  const post = getPostBySlug(params.params.slug + '.md', [
    'titulo',
    'intro',
    'imagen',
    'fecha',
    'autor',
    'content',
  ])

  const contenido = await markdownToHtml(post.content || '')

  return {
    props: {
      ...post, 
      contenido,
    },
  }
}

/**
 * Que hace getStaticPaths?
 * getStaticPaths nos permite generar las rutas de las páginas
 * estáticas en tiempo de construcción, es decir, cuando se
 * ejecuta el comando npm run build, esto es útil para páginas
 * estáticas que no cambian mucho, ya que se genera una página
 * estática por cada ruta que se pase en el array paths.
*/
export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false,
  }
}