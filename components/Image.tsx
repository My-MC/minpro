import Image from "next/image";
import { FC } from "react";

import styles from "../styles/components/CustomImage.module.scss";

type Props = {
  src: string;
};

/**
 * `<img>`タグをNext.jsの`<Image>`を使ってサイズを変えて表示する
 */
const CustomImage: FC<Props> = (props) => {
  return (
    <div>
      <Image src={props.src} alt={``} className={styles.image} fill />
    </div>
  );
};

export default CustomImage;
