import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themeConfig";
import { useState, useEffect } from "react";
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import styled from "styled-components";
import Link from "next/link";
import media from "./screen";



const Nav = styled.nav`
  background: ${(props) => props.bg};
  height: 100%;
  display: flex;
  justify-content: space-between;

`;

const Logo = styled.h1`
  color: ${(props) => props.bg};
  font-size: 20px;
  font-family: Open Sans, bold;
  /* color: ${(props) => props.homeColor}; */
  color: #4433FF;


  ${media.mobile} {
    display: none;
  }

  ${media.tablets} {
    margin: 10px auto 0 10px;
  }

  ${media.desktop} {
    margin: 10px auto 0 10px;
  }
`;

const NavbarLink = styled.a`
  font-size: 20px;
  font-family: Averia Serif Libre, bold;
  margin-top: 15px;
  color: ${(props) => props.homeColor};

  ${media.mobile} {
    margin: 12px 0 0 10px;
  }

  ${media.tablets} {
    margin: 10px 10px 0 0;
  }
  ${media.desktop} {
    margin: 10px 10px 0 0;
  }
`;

export const Toggle = styled.button`
  cursor: pointer;
  padding: 0%;
  height: 40px;
  border: none;
  background: transparent;
  transition: all 0.5s ease;
  &:focus {
    outline: none;
  }

  ${media.mobile} {
    margin: 0px 10px 0 0;
  }

  ${media.tablets} {
    margin: 2px 10px 12px 0;
  }

  ${media.desktop} {
    margin: 2px 10px 12px 0;
  }
`;

export const Container = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
  display: inline-block;
  position: absolute;
  width: 100%;
  padding-bottom: 10%;
  vertical-align: middle;
  overflow: hidden;

  svg {
    display: inline-block;
    position: absolute;
    top: 10;
    left: 0;
    right: 0;
    margin-right: -2px;
    stroke: none;
    fill: ${(props) => props.bg};
    max-width: 100%;
  }
`;

const Navbar = () => {
  const [theme, setTheme] = useState("");

  // const bgc = theme === "light" ? "#A2D2FF" : "#003566";
  const bgc = theme === "light" ? "#A2D2FF" : "#2D364C";

  const homeColor = theme === "light" ? "black" : "white";
  const icon =
    theme === "light" ? <HiMoon size={25} fill="black"/> : <HiSun size={25} fill="#FEE715"/>;

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    setTheme(JSON.parse(theme));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <>
      <Nav bg={bgc}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Logo homeColor={homeColor}>Simply Next 👩‍💻 </Logo>
          <Link href="/" passHref>
            <NavbarLink homeColor={homeColor}>Home</NavbarLink>
          </Link>
          <Toggle onClick={toggleTheme}>{icon}</Toggle>
        </ThemeProvider>
      </Nav>
      <Container bg={bgc}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </Container>
    </>
  );
};

export default Navbar;


