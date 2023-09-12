import Image from 'next/image'
import Link from 'next/link'
import classes from './CoverImage.module.css'

export const CoverImage = ({ src, titulo, slug }) => {

  const imagen = (
    <Image 
      src={src} 
      alt={`Imagen de portada para ${titulo}`} 
      width={1300}
      height={630}
      className={classes.imagen}
    />
  )

  return (
    <div className={classes.imagen}>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={titulo}>
          { imagen }
        </Link>
      ) : (
        imagen
      )}
    </div>
  )
}