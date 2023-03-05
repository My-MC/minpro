import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Minpro</title>
      </Head>

      <div className={styles.mian}>
        <div>
          <h1 className={styles.title}>Minpro</h1>
          <h2 className={styles.description}>みんなのためのプログラミング</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <Link href="posts/img" passHref>
                <p>第二回</p>
                <p>WebPを使ってサイトを最適化しよう</p>
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="posts/about" passHref>
                <p>第一回</p>
                <p>このサイトについて</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
