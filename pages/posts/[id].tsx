import Head from "next/head";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import React from "react";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { unified } from "unified";

import matter from "gray-matter";
import { cdate } from "cdate";

import { getArticleData, getArticlePaths } from "../../libs/postsData";
import { markdownToHtml } from "../../libs/transpiler";

import "highlight.js/styles/github-dark.css";
import styles from "../../styles/posts.module.css";

import CustomImage from "../../components/Image";

type ArticleData = {
  title: any;
  content: string;
  upload_date: string;
  update_date: string | null
};

type Props = {
  post: ArticleData;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticlePaths();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  //FIXME `{id}`としているのは無理やりstringにするためなので解決策を探す
  const fileContent = getArticleData(`${id}`);
  const markdownArticle = matter(fileContent).content;
  const articleMetas = matter(fileContent).data;

  const contentHTML = markdownToHtml(markdownArticle);

  const content = contentHTML.toString();
  const title = articleMetas.front_matter_title;
  const upload_date = articleMetas.upload_date;

  const post = { content: content, title: title, upload_date };

  return { props: { post }, notFound: !post };
};

const Article: NextPage<Props> = (props) => {
  const data = props.post;

  const processor = unified()
    .use(rehypeParse, { fragment: true }) // 要素を変換するためにtrueにする
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        img: CustomImage,
      },
    });

  const title = `${props.post.title} | Minpro`;

  const upload_date = cdate(data.upload_date)
    .locale("ja")
    .format("YYYY年 MMMM DD日 dddd");

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <div className={styles.container}>
          <article className={styles.article}>
            <div>
              <p>Upload date: {upload_date}</p>
            </div>
            {processor.processSync(data.content).result}
          </article>
        </div>
      </main>
    </>
  );
};

export default Article;
