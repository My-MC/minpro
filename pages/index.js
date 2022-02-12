import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title className={styles.title}>minpro</title>
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
            <Link href="posts/about" passHref>
              <div className={styles.card}>
                <a>
                  <p>第一回</p>
                  <p>このサイトについて</p>
                </a>
              </div>
            </Link>
          </div>
        </div>
      </mian>
      <footer className={styles.footer}>
        <a
          href="https://github.com/My-MC"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by My-MC(My)
        </a>
      </footer>
    </div>
  )
}
