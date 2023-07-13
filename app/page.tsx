"use client"
import Image from 'next/image'
import styles from './page.module.css'
import SignUp from './signup'
import LogIn from './login'

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <SignUp/>
        <LogIn/>
      </div>
      <p className={styles.info}>
        Check the console for the information ->
      </p>
    </main>
  )
}
