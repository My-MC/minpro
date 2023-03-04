import Link from "next/link";
import styles from "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
        <header>
          <div>
            <Link href="/">
              Minpro
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/posts/about">
                  About
                </Link>
              </li>
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
  );
}

export default MyApp;
