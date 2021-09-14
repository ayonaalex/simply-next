import Navbar from "./Navbar";
import styled from "styled-components";
import media from "./screen";

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "main"
    "nav";

  ${media.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 15fr 1fr;
    grid-template-areas:
      "main"
      "nav";
  }

  ${media.tablets}{     
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 15fr;
    grid-template-areas:
      "nav"
      "main";
  }

  ${media.desktop} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 15fr;
    grid-template-areas:
      "nav"
      "main";
  }
`;

const NavWrapper = styled.nav`
  grid-area: nav;

  ${media.mobile}{
    width: 100%;
    position: fixed;
    bottom: 0px;
  }

  ${media.desktop} {
    width: 100%;
    position: fixed;
    top: 0px;
  }
`;

const MainWrapper = styled.div`
  grid-area: main;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
      <MainWrapper>{children}</MainWrapper>
    </Container>
  );
};

export default Layout;
