---
front_matter_title: 大型アップデートの内容
upload_date: 2022-5-03
---

# 大型アップデートの内容

## 初めに

お久しぶりです。Myです。

最近デザイン、システムともに大型のアップデートを実施しました。今回はその内容を解説を含めて、説明していきます。

## デザインの変更

まずデザインが大幅に変わりました。モダンな感じになったと思います。

特に工夫した点はありません。今後ダークモードの対応も進める予定です。

## 記事の一覧表示と日付表示

トップ画面で記事が自動的に一覧表示されるようになりました。

使用ライブラリ

* cdate 日付管理
* gray-matter Markdownのメタデータのパーズ

`cdate`は`moment.js`や`day.js`よりも早く、また同じような記法ができるのが特徴です。

実際のコードを挙げてみます。

``` javascript
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
```

ここでは最初にできた`articleObject`をcdateを使って日付を比較してソートをしています。そしてこのオブジェクトから記事の一覧を作成しています。

## 記事のMarkdown化

記事をすべてMarkdownにしました。これによっていちいちJSXやTSXを書いていたころと比べてだいぶ楽になり、また表示の仕方が違うなどということもなくなり、URLなどもすべて自動的に生成しSSGで配信されるためとても高速に動作します。

使用ライブラリ

* rehype-highlight
* rehype-parse
* rehype-react
* rehype-stringify
* remark-parse
* remark-rehype
* remark-unwrap-images
* unified

これらのライブラリはすべて`unified`に関連するものです。

実はこの記事の生成はたった一つの関数でほとんど処理されています。

``` typescript transpiler.ts
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkUnwrapImages from "remark-unwrap-images";
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
    .use(remarkUnwrapImages) // imgタグのラッピングを外す
    .use(remarkRehype) // mdastをhastに変換
    .use(rehypeHighlight) // hastにhighlightのデータを追加する
    .use(rehypeStringify) // hastをHTMLに変換
    .processSync(markdown); // 上記の処理を行うデータをここで受け取る
```

たったのこれだけでマークダウンからSyntax Highlightまですべて行ってくれます。また他にもプラグインがあり、目次の自動生成などもあるので今後サイドバーをつける時などに利用していきます。

またファイルの一覧の取得には一つの関数で完結されています。

``` typescript
export const getArticlePaths = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  // 末尾に.mdがつくもののみにフィルターをかける
  const articleNames = fileNames.filter((name) => name.match(/\.md$/));

  const paths = articleNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, "") },
  }));

  return paths;
};
```

仕組みとしては

1. ファイル名の配列を作る
2. 最後に`.md`とつくファイルだけに絞る
3. 配列からオブジェクトを作る

というとてもシンプルな作りになってます。

## 最後に

とてもざっくりとした説明になりましたが、これからも不定期で更新していきますのでよろしくお願いします。
