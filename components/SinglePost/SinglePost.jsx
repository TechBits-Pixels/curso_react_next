import classes from './SinglePost.module.css'
import Image from 'next/image'
import { DateFormatter } from '../DateFormatter/DateFormatter'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function SinglePost({ post }) {

  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>{post.titulo}</h1>
          <p className={classes.author}>por {post.autor}</p>
          <div className={classes.date}>
            <DateFormatter dateString={post.fecha} />
          </div>
          <div className={classes.image}>
            <Image src={post.imagen}
              alt={post.title}
              width={1300}
              height={630}
              className={classes.coverImage}
              layout='responsive' />
          </div>
        </div>
        <div className={classes.content}>
          <ReactMarkdown 
            className={classes.body}
            rehypePlugins={[rehypeRaw]}
          >
            { post.contenido }
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}