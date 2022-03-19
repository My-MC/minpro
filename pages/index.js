import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Minpro</title>
      </Head>

      <mian className={styles.mian}>
        <div>
          <h1 className={styles.title}>
            Minpro
          </h1>
          <h2 className={styles.description}>
            みんなのためのプログラミング
          </h2>
        </div>
        <div className={styles.container}>
          <div className={styles.grid}>
          <Link href="posts/img" passHref>
              <div className={styles.card}>
                <a>
                  <p>第二回</p>
                  <p>WebPを使ってサイトを最適化しよう</p>
                </a>
              </div>
            </Link>
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
    </div>
  )
}
