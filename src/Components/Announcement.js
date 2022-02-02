import styled from "styled-components";
import React from "react";

const Announcement = () => {
  return <Container>Great Deals!!😎</Container>;
};

const Container = styled.div`
  height: 30px;
  background-color: teal;
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: bold;
  color: white;
`;

export default Announcement;
