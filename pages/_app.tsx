import type { AppProps } from "next/app";
import Link from "next/link";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div>
        <header>
          <div>
            <Link href="/">Minpro</Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/posts/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Component {...pageProps} />
      <div style={{ textAlign: "center" }}>
        <footer>
          <a
            href="https://github.com/My-MC"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by My-MC(My)
          </a>
        </footer>
      </div>
    </Layout>
  );
}

export default MyApp;
