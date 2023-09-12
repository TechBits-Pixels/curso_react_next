import Link from 'next/link'
import { CoverImage } from '@/components/CoverImage/CoverImage'
import { DateFormatter } from '@/components/DateFormatter/DateFormatter'
import classes from './PostPreview.module.css'
import openSans from '@/pages/_app'

export const PostPreview = ({ titulo, imagen, fecha, intro, autor, slug}) => {

  return (
    <div>
      <div className={classes.imagen}>
        <CoverImage 
          title={titulo}
          src={imagen}
          slug={slug}
        />
      </div>
      <div className={openSans.className}>
        <h3 className={classes.titulo}>
          <Link as={`/posts/${titulo}`} href="/posts/[titulo]" className={classes.link}>
            {titulo}
          </Link>
        </h3>
        <div className={classes.fecha}>
          <DateFormatter dateString={fecha} />
        </div>
        <p className={classes.intro}>{intro}</p>
        <p className={classes.autor}>por {autor}</p>
      </div>
    </div>
  )
}