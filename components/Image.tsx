import Image from "next/image";
import { FC } from "react";

type Props = {
  src: string;
};

/**
 * `<img>`タグをNext.jsの`<Image>`を使ってサイズを変えて表示する
 */
const CustomImage: FC<Props> = (props) => {
  return <Image src={props.src} alt={``} width={600} height={300} />;
};

export default CustomImage;
