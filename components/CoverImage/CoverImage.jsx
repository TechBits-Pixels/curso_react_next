import Image from 'next/image'
import Link from 'next/link'
import classes from './CoverImage.module.css'

export const CoverImage = ({ src, titulo, slug }) => {

  const image = (
    <Image 
      src={src} 
      alt={`Imagen de portada para ${titulo}`} 
      width={1300}
      height={630}
      className={classes.coverImage}
    />
  )

  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={titulo}>
          { image }
        </Link>
      ) : (
        image
      )}
    </div>
  )
}