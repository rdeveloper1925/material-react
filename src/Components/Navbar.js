import React from "react";
import { BsSearch, BsCartDash } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <SearchInput />
            <BsSearch style={{ fontSize: "15px", color: "gray" }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>Rick Store</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 13px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid gray;
  padding: 5px;
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

const SearchInput = styled.input`
  border: none;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 2;
  text-align: center;
  font-weight: bold;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Container = styled.div`
  height: 50px;
  margin: 0px;
  padding: 10px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;
