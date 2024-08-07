import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }

  @media (max-width: 450px) {
    .logo {
      height: 4rem;
    }
    padding: 0 1.5rem;
  }
`;

function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="Main logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>

    //  if we make  "images" folder inside "public" folder we can access that images anywhere in src folder.
  );
}

export default Header;
