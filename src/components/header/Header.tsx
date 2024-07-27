import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle
} from "flowbite-react";


const Header = () => {
  return (
    <header>
      <Navbar>
        <NavbarBrand as={Link} href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            BOOK STORE
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink as={Link}href="#home" active>
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="#about">
            About
          </NavbarLink>
          <NavbarLink as={Link} href="#services">Services</NavbarLink>
          <NavbarLink as={Link} href="#qaa">Q & A</NavbarLink>
          <NavbarLink as={Link} href="#footer">Contact</NavbarLink>
        </NavbarCollapse>
        <DarkThemeToggle />
      </Navbar>
    </header>
  );
};

export default Header;
