import React from 'react'
import styles from './styles.module.css'
import BlogItem from '@/components/BlogItem'
const getData = async () => {
  const data = await fetch('https://dummyjson.com/posts?limit=10')
return data.json()
}


const Page =  async  () =>{
  const {posts} = await getData()

  return (
    <div className={styles.blogsContainer}>
      {posts.map((post) => (
        <BlogItem key={post.id} {...post} />
      ))}
    </div>
  )
}

export default Page