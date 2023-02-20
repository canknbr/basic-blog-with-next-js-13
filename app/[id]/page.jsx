import React from 'react'
import {notFound} from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css'
const getPostById = async (id) => {
  const data = await fetch(`https://dummyjson.com/posts/${id}`);
  return data.json();
};
async function PageDetail({params}) {

  const {id,title,body} = await getPostById(params.id);
  if(!title){
    return  notFound();
  }
  return (
    <div className={styles.PageDetailContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src={`https://picsum.photos/960/400?random=${id}`}
          alt="Blog Card Image"
          fill
        />
      </div>
      <h1>
        {title}
      </h1>
      <p>
        {body}
        {body}
        {body}
      </p>
    </div>  
  )
}

export default PageDetail