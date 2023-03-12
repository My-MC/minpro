import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

/**
 * ヘッダーを含まないmarkdownに加工をしてHTMLを返す関数
 * @param markdown 処理をするヘッダーを含まないmarkdown
 * @returns 仮想のファイルを返す
 */
export const markdownToHtml = (markdown: string) =>
  unified()
    .use(remarkParse) // Markdownをmdastに変換
    .use(remarkRehype) // mdastをhastに変換
    .use(rehypeHighlight) // hastにhighlightのデータを追加する
    .use(rehypeStringify) // hastをHTMLに変換
    .processSync(markdown); // 上記の処理を行うデータをここで受け取る
