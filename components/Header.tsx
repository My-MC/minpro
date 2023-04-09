import { FC } from "react";
import Link from "next/link";

import { BsGithub } from "react-icons/bs";

import styles from "../styles/components/Header.module.scss";

const Header: FC = () => {
  return (
    <nav>
      <div className={styles.header}>
        <span>
          <h2 className={styles.brand}>Minpro</h2>
        </span>
        <ul className={styles.content}>
          <li className={styles.articles}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.articles}>
            <Link href="/posts/about">About</Link>
          </li>
        </ul>
        <ul className={styles.content}>
          <a
            href="https://github.com/My-MC/minpro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
