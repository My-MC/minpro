import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, NextPage } from "next";

import { cdate } from "cdate";
import matter from "gray-matter";

import styles from "../styles/Home.module.scss";

import { getArticleData, getArticlePaths } from "../libs/postsData";

type Props = {
  articleObject: {
    title: string;
    contentId: string;
    uploadDate: string;
  }[];
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const articleIds = getArticlePaths();

  const articleObject = articleIds.map((id) => {
    const contentId = id.params.id;
    const title: string = matter(getArticleData(contentId)).data
      .front_matter_title;
    const uploadDate = cdate(
      matter(getArticleData(contentId)).data.upload_date
    );
    return { title, contentId, uploadDate };
  });

  const sortedArticleObject = articleObject
    .sort((a, b) => {
      return a.uploadDate < b.uploadDate ? 1 : -1;
    })
    .map((data) => {
      return {
        title: data.title,
        contentId: data.contentId,
        uploadDate: data.uploadDate
          .locale("ja")
          .format("YYYY年 MMMM DD日 dddd"),
      };
    });

  return { props: { articleObject: sortedArticleObject } };
};

const Home: NextPage<Props> = (props) => {
  const listItems = props.articleObject.map((posts) => {
    const data = `Upload: ${posts.uploadDate}`;

    return (
      <div key={posts.contentId} className={styles.card}>
        <Link href={`/posts/${posts.contentId}`}>
          <div className={styles.body}>
            <h3>{posts.title}</h3>
          </div>
          <div className={styles.footer}>
            <p>{data}</p>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>Minpro</title>
      </Head>

      <div className={styles.main}>
        <div className={styles.grid}>{listItems}</div>
      </div>
    </>
  );
};

export default Home;
