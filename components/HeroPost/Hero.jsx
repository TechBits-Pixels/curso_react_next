import classes from './Hero.module.css'
import { CoverImage } from '@/components/CoverImage/CoverImage'
import { DateFormatter } from '@/components/DateFormatter/DateFormatter'
import Link from 'next/link'

export default function HeroPost({ post }) {
  return (
    <section>
      <div className={classes.imagen}>
        <CoverImage title={post.titulo} src={post.imagen} slug={post.slug} />
      </div>
      <div className={classes.container}>
        <div>
          <h3 className={classes.titulo}>
            <Link
              as={`/posts/${post.slug}`}
              href={`/posts/${post.slug}`}
              className={classes.link}
            >
              {post.titulo}
            </Link>
          </h3>
          <div className={classes.fecha}>
            <DateFormatter dateString={post.fecha} />
          </div>
          <p className={classes.autor}>por {post.autor}</p>
        </div>
        <div>
          <p className={classes.intro}>{post.intro}</p>
        </div>
      </div>
    </section>
  )
}