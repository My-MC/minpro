import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/posts.module.css";

export default function About() {
  return (
    <div>
      <Head>
        <title>WebPを使ってサイトを最適化しよう | Minpro</title>
      </Head>

      <main>
        <h1 className={styles.title}>WebPを使ってサイトを最適化しよう</h1>
        <h2 className={styles.description}>画像の最適化を目指して</h2>
        <div className={styles.container}>
          <article className={styles.article}>
            <h2 className={styles.heading}>はじめに</h2>
            <p>こんにちはMyです。</p>
            <p>今回はWebPを使って画像の最適化をしていきたいと思います。</p>

            <h2 className={styles.heading}>WebPの概要</h2>
            <p>
              またこのWebPは2010年にGoogle
              LLCによって開発された比較的新しいオープンな画像形式です
            </p>
            <p>
              これは、ウェブサイトのトラフィック量軽減と表示速度短縮を目的としていて非可逆圧縮であるがアルファチャンネルが使えることが特徴です。
              先に述べたようにトラフィック量軽減と表示速度短縮を目的としているためデータサイズがとても少ないことも特徴です。これはJPEGよりも高いです。
              さらにWebPにはJPEGにはない透過もできます。
            </p>
            <p>
              しかしこのWebPにもデメリットがあります。それは新しいがゆえにまだ対応していないブラウザがあることです。
            </p>
            <p className={styles.link}>
              <a
                href="https://developers.google.com/speed/webp/faq#which_web_browsers_natively_support_webp"
                target="_blank"
                rel="noopener noreferrer"
              >
                こちらが対応表です。
              </a>
            </p>
            <p>
              最近ではほとんどのブラウザが対応してきていますが、Internet
              Explorerなどの古いブラウザなどでは対応していないので注意しなくてはいけません。
            </p>

            <h2 className={styles.heading}>実践してみよう</h2>
            <p>
              最初に今回は僕がマイクラをプレイしていた時のスクリーンショットを1.ではそのままのPNG形式のもの、2.ではWebPに加工したものを使い比較していきたいと思います。
              今回のこの加工には
              <a
                href="https://ffmpeg.org"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                FFmpeg
              </a>
              を使いました。
            </p>
            <h3>1.そのままPNG形式</h3>
            <Image
              src="/assets/test.png"
              width={600}
              height={300}
              alt="test"
              objectFit="contain"
            />
            <p style={{ color: "Gray" }}>PNG形式 サイズ 265KB</p>

            <h3>2.WebP形式に変換</h3>
            <Image
              src="/assets/test.webp"
              width={600}
              height={300}
              alt="test"
              objectFit="contain"
            />
            <p style={{ color: "Gray" }}> WebPに変換 サイズ 21.2KB</p>

            <p>
              おわかりいただけただろうか。なんとWebPのほうはPNG形式の1/10のサイズになっています。僕はこれを見たときとても驚きました(本当です)
            </p>

            <p>
              次にPNGから1.JPEGに変換したものと2.WebPに変換したものを比較していきたいと思います。これも変換には
              <a
                href="https://ffmpeg.org"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                FFmpeg
              </a>
              を使いました。
            </p>

            <h3>1.JPEGに変換したもの</h3>
            <Image
              src="/assets/test.jpeg"
              width={600}
              height={300}
              alt="test"
              objectFit="contain"
            />
            <p style={{ color: "Gray" }}> JPEGに変換 サイズ 23.4KB</p>

            <h3>2.WebP形式に変換</h3>
            <Image
              src="/assets/test.webp"
              width={600}
              height={300}
              alt="test"
              objectFit="contain"
            />
            <p style={{ color: "Gray" }}> WebPに変換 サイズ 21.2KB</p>

            <p>
              こちらは2KBとほとんど変わりありませんでした。もしかしたらFFmpegが優秀が優秀だからかもしれません。しかしよく見てみるとJPEGのほうが少しぼやけてる感じがします(個人の感想です)
            </p>

            <h2 className={styles.heading}>結論</h2>
            <p>
              対応していないブラウザがまだあるが、最近のブラウザではほとんど対応しているので積極的に導入していいと思います。(個人の感想です)
            </p>

            <h2 className={styles.heading}>引用・参考・使用ソフトフェア</h2>

            <p className={styles.link}>
              <a
                href="https://ffmpeg.org"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                FFmpeg 様 FFmpeg
              </a>
            </p>

            <p className={styles.link}>
              <a
                href="https://ja.wikipedia.org/wiki/WebP"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia 様 WebP より
              </a>
            </p>
          </article>
        </div>
        <div className={styles.container}>
          <div className={styles.grid}>
            <Link href="/" passHref>
              <div className={styles.card}>
                <p>HOME</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
