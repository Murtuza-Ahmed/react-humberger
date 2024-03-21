import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media only screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;

    li {
      color: #fff;
    }
  }
`;

const RightNav = () => {
  return (
    <div>
      <Ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Sing In</li>
        <li>Sign Up</li>
      </Ul>
    </div>
  );
};
export default RightNav;
