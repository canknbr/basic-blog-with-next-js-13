import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
function Header() {
  return (
    <div className={styles.headerWrapper}>
        <Link href="/">
            <h1>Blog..</h1>
        </Link>
        <nav className={styles.nav}>
            <Link href="/about">
                <p>About</p>
            </Link>
        </nav>
    </div>
  )
}

export default Header