import styles from "../../styles/About.module.css"
import Head from "next/head"

export default function About () {
    return(
        <div>
            <Head>
                <title> minpro</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    このサイトについて
                </h1>
                <article>
                    
                </article>
            </main>
        </div>
    )
}