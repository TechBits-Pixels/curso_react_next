import classes from '@/styles/Home.module.css'
import { getAllPosts } from '@/lib/api'

import HeroPost from '@/components/HeroPost/Hero'
import MoreStories from '@/components/MoreStories/MoreStories'

// Los posts se pasan como props, estos son los que se obtienen
// en la función getStaticProps
export default function Home({ posts }) {
  return (
    <div className={classes.home}>
      <h1 className={classes.title}>Technobits & Pixels</h1>
      <HeroPost post={posts[0]}/>
      <MoreStories posts={posts.slice(1)}/>
    </div>
  )
}

// La función getStaticProps nos permite obtener datos de una API
// y pasarlos a la página como props, esto ocurre en tiempo de construcción
// y no en tiempo de ejecución, por lo que es más rápido, es util para
// páginas que no cambian mucho

export async function getStaticProps(){
  // Vamos a obtener todos los posts y pasamos los campos que queremos obtener
  const posts = getAllPosts([
    'titulo',
    'fecha',
    'slug',
    'autor',
    'imagen',
    'intro',
  ])

  // Devolvemos los posts
  return {
    props: { posts },
  }
}
