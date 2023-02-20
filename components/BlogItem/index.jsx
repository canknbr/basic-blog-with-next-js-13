import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
function BlogItem({id,title,body}) {
  return (
    <Link href={`/${id}`} className={styles.blogItemWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={`https://picsum.photos/200/300?random=${id}`}
          alt="Blog Card Image"
          fill
        />
      </div>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{body}</p>
      </div>
    </Link>
  );
}

export default BlogItem