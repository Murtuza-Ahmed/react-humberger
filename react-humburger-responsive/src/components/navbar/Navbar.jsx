import React from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bott0m: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <div>
      <Nav>
        <div className="logo">
          <h1>NavBar</h1>
        </div>
        <Burger />
        <RightNav />
      </Nav>
    </div>
  );
};
export default Navbar;
