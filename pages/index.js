import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>minpro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <mian className={styles.mian}>
      <header>
        <div>
          <h1 className={styles.title}>
            Minpro
          </h1>
          <h2 className={styles.description}>
            みんなのためのプログラミング
          </h2>
      </div>
      </header>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <p></p>
            </div>
          </div>
        </div>
      </mian>
      <footer className={styles.footer}>
        <a
          href="https://github.com/My-MC"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <span className={styles.logo}>
            <Image src="/icon.png" alt="Vercel Logo" width={16} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
