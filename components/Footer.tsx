import { FC } from "react";
import { Link } from "@nextui-org/react";

const Footer: FC = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <footer>
          <Link
            href="https://github.com/My-MC"
            target="_blank"
            rel="noopener noreferrer"
            color="text"
          >
            Created by My-MC(My)
          </Link>
        </footer>
      </div>
    </>
  );
};

export default Footer;
