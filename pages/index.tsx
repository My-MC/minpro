import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { NextPage } from "next";

import { Card, Grid, Text } from "@nextui-org/react";
import type { CardVariants } from "@nextui-org/react";

import { isSafari } from "react-device-detect";
import { useState, useEffect } from "react";

import { cdate } from "cdate";
import matter from "gray-matter";

import styles from "../styles/Home.module.scss";

import { getArticleData, getArticlePaths } from "../libs/postsData";

type Props = {
  article_object: {
    title: string;
    content_id: string;
    upload_date: string;
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
    return { title, content_id: contentId, upload_date: uploadDate };
  });

  const sortedArticleObject = articleObject
    .sort((a, b) => {
      return a.upload_date < b.upload_date ? 1 : -1;
    })
    .map((data) => {
      return {
        title: data.title,
        content_id: data.content_id,
        upload_date: data.upload_date
          .locale("ja")
          .format("YYYY年 MMMM DD日 dddd"),
      };
    });

  return { props: { article_object: sortedArticleObject } };
};

const Home: NextPage<Props> = (props) => {
  const [variant, setVariant] = useState<CardVariants>();

  useEffect(() => {
    if (isSafari) {
      setVariant("bordered");
    } else {
      setVariant("shadow");
    }
  }, []);

  const listItems = props.article_object.map((posts) => {
    const data = `Upload: ${posts.upload_date}`;

    return (
      <Grid key={posts.content_id} className={styles.CardList}>
        <Link href={`/posts/${posts.content_id}`}>
          <Card variant={variant}>
            <Card.Body>
              <Text h3>{posts.title}</Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>{data}</Card.Footer>
          </Card>
        </Link>
      </Grid>
    );
  });

  return (
    <>
      <Head>
        <title>Minpro</title>
      </Head>

      <div className={styles.main}>
        <Grid.Container gap={2} justify="center">
          {listItems}
        </Grid.Container>
      </div>
    </>
  );
};

export default Home;
