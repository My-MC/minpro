import styles from "../../styles/posts.module.css"
import Head from "next/head"
import Link from "next/link"

export default function About () {
    return(
        <div>
            <Head>
                <title>About | Minpro</title>
            </Head>

            <main>
                <h1 className={styles.title}>
                    このサイトについて
                </h1>
                <h2 className={styles.description}>
                    こんにちは
                </h2>
                <div className={styles.container}>
                    <article className={styles.article}>
                        <h2 className={styles.heading}>挨拶</h2>
                        <p>こんにちはMyです。</p>
                        <p>このサイトは僕がJavaScriptを勉強しながら僕がのんびりと更新していく予定です。</p>

                        <h2>このサイトのライセンス</h2>
                        <p>
                            このサイトのライセンス及び
                            <a href="https://github.com/My-MC/minpro" target="_blank" rel="noopener noreferrer">
                            このサイトのリポジトリ
                            </a>
                            はMITライセンスです。
                        </p>
                        <p>よって私はこのサイトの利用、また情報によって損害が発生しても一切の責任を負いません。</p>
                        <h2 className={styles.heading}>PullRequestなどについて</h2>
                        <p>私はこのサイトをGitHubに上げています。つまりそれは誰でも読める誰でも改変できるということです。</p>
                        <p>
                            つまり言いたいことは、
                            <span style={{ fontWeight: "bold"}}>自由にPullRequest送ってよし</span>
                            ということです
                        </p>
                        <p className={styles.linethrough}>
                            しかし約束してもらいたいことがありまして、このサイトは
                            <a href="https://github.com/My-MC/minpro/blob/master/package.json" target="_blank" rel="noopener noreferrer">
                                こちら</a>
                            を見てもらうとNext.jsで構築しています。ですがこのサイトはGithubPagesで公開しています。ですのでNext.jsの画像機能が使えません。
                        </p>
                        <p className={styles.linethrough}>ですのでその問題を解決するまでは画像を使用しないようにお願いします。</p>
                        <p className={styles.update}>3/5更新</p>
                        <p>Vercelに移行しましたので画像が使用できるようになりました。</p>
                        <h2 className={styles.heading}>最後に</h2>
                        <p>ゆっくりマイペースに更新していくと思いますのでよろしくお願いします。</p>
                    </article>
                </div>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <Link href="/" passHref>
                            <a>
                                <div className={styles.card}>
                                    <p>HOME</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}