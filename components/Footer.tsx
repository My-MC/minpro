import { FC } from "react";

import styles from "../styles/components/Footer.module.scss";

const Footer: FC = () => {
  return (
    <>
      <div className={styles.footer}>
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
    </>
  );
};

export default Footer;
