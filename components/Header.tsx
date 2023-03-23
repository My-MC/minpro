import { FC } from "react";
import Link from "next/link";
import { Navbar, Text } from "@nextui-org/react";

import { BsGithub } from "react-icons/bs";
const Header: FC = () => {
  return (
    <Navbar isBordered variant="static">
      <Navbar.Brand>
        <Text h2 color="inherit">
          Minpro
        </Text>
      </Navbar.Brand>

      <Navbar.Content>
        <Navbar.Link href="/" as={Link}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/posts/about" as={Link}>
          About
        </Navbar.Link>
      </Navbar.Content>

      <Navbar.Content>
        <Navbar.Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/My-MC/minpro"
        >
          <BsGithub />
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default Header;
