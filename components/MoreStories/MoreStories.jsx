import { PostPreview } from "../PostPreview/PostPreview"
import classes from "./MoreStories.module.css"

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className={classes.titulo}>Más Historias</h2>
      <div className={classes.grid}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            titulo={post.titulo}
            imagen={post.imagen}
            fecha={post.fecha}
            intro={post.intro}
            autor={post.autor}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  )
}