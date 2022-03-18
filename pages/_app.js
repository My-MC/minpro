import styles from '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <div>
      <header>
        <div>
          <Link href="/">
            <a>Minpro</a>
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/posts/about"><a>About</a></Link></li>
          </ul>
          </nav>
      </header>
    </div>
    <Component {...pageProps} />
    <div style={{ textAlign: "center" }}>
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
  </div>
  )
}

export default MyApp
