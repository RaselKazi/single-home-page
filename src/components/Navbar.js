import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import logo from "../img/logo.svg";
const Container = styled.div`
  background-color: #400d40;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  margin-top: 25px;
  align-items: center;
`;

const Logo = styled.h2`
  margin-left: -15px;
  margin-right: 30px;

  color: white;
  font-family: Slack-Circular-Pro, "Helvetica Neue", Helvetica, "Segoe UI",
    Tahoma, Arial, sans-serif;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 16px;
  font-wight: 600;
  color: white;
`;

const Button1 = styled.button`
  border: 1px solid white;
  padding: 10px 15px;
  background-color: transparent;
  color: white;
  margin-left: 30px;
  border-radius: 4px;
  cursor: pointer;
`;
const Button2 = styled.button`
  border: 1px solid white;
  padding: 10px 15px;
  background-color: white;
  color: #400d40;
  margin-left: 30px;
  border-radius: 4px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <img src={logo} alt="" />
          <Logo>slack</Logo>
          <Menu>
            <MenuItem>Product</MenuItem>
            <MenuItem>Solutions</MenuItem>
            <MenuItem>Enterprise</MenuItem>
            <MenuItem>Resource</MenuItem>
            <MenuItem>Pricing</MenuItem>
          </Menu>
        </Left>
        <Right>
          <Menu>
            <MenuItem>
              <BsSearch />
            </MenuItem>
            <MenuItem>Sign in</MenuItem>
          </Menu>
          <Button1>TALK TO SALS</Button1>
          <Button2>TRY FOR FREE</Button2>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
