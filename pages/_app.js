import styles from '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div>    
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
