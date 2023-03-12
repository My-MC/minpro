import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

/**
 * postsディレクトリからidを返す関数
 * @return string型のidを返す
 */
export const getArticlePaths = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  // 末尾に.mdがつくもののみにフィルターをかける
  const articleNames = fileNames.filter((name) => name.match(/\.md$/));

  const paths = articleNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, "") },
  }));

  return paths;
};

/**
 * 記事のファイルの内容を返す関数
 * @param id データを取得する記事のid
 * @returns ファイルの内容をそのまま返す
 */
export const getArticleData = (id: string) => {
  const filePath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  return fileContents;
};
