---
front_matter_title: WebPを使ってサイトを最適化しよう
upload_date: 2022-3-19
---

# WebP を使ってサイトを最適化しよう

## はじめに

こんにちは My です。

今回は WebP を使って画像の最適化をしていきたいと思います。

## WebP の概要

この WebP は 2010 年に Google LLC によって開発された比較的新しいオープンな画像形式です。

これは、ウェブサイトのトラフィック量軽減と表示速度短縮を目的としていて非可逆圧縮であるがアルファチャンネルが使えることが特徴です。 先に述べたようにトラフィック量軽減と表示速度短縮を目的としているためデータサイズがとても少ないことも特徴です。これは JPEG よりも高いです。 さらに WebP には JPEG にはない透過もできます。

しかしこの WebP にもデメリットがあります。それは新しいがゆえにまだ対応していないブラウザがあることです。しかしそれも IE のみになり、IE も EOL を迎えたので最新バージョンのブラウザを利用していれば大丈夫です。

[Can I use の対応表](https://caniuse.com/webp)

## 実践してみよう

最初に今回は僕がマイクラをプレイしていた時のスクリーンショットを 1.ではそのままの PNG 形式のもの、2.では WebP に加工したものを使い比較していきたいと思います。 今回のこの加工には[FFmpeg](https://ffmpeg.org)を使いました。

### PNGとWebPの比較

#### 1.そのまま PNG 形式

![PNG Image](/assets/test.png)
> PNG形式 サイズ 265KB

#### 2.WebP形式に変換

![WebP Image](/assets/test.webp)
> WebPに変換 サイズ 21.2KB

おわかりいただけただろうか。なんとWebPのほうはPNG形式の1/10のサイズになっています。僕はこれを見たときとても驚きました(本当です)

次にPNGから1.JPEGに変換したものと2.WebPに変換したものを比較していきたいと思います。これも変換には[FFmpeg](https://ffmpeg.org)を使いました。

### JPEGとWebPの比較

#### 1.JPEGに変換したもの

![JPEG Image](/assets/test.jpeg)
> JPEGに変換 サイズ 23.4KB

<!-- markdownlint-disable-next-line MD024 -->
#### 2.WebP形式に変換

![WebP Image](/assets/test.webp)
> WebPに変換 サイズ 21.2KB

こちらは2KBとほとんど変わりありませんでした。もしかしたらFFmpegが優秀だからかもしれません。しかしよく見てみるとJPEGのほうが少しぼやけてる感じがします(個人の感想です)

## 結論

IEがなくなった今、最近のブラウザではほとんど対応しているので積極的に導入していいと思います。(個人の感想です)

## 引用・参考・使用ソフトフェア

[FFmpeg 様 FFmpeg](https://ffmpeg.org)

[Wikipedia 様 WebP より](https://ja.wikipedia.org/wiki/WebP)
