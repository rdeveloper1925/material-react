import React from "react";
import styled from "styled-components";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Slider = () => {
  const handleClick = (direction) => {};
  return (
    <Container>
      <ArrowContainer direction="left" onClick={() => handleClick("left")}>
        <BsArrowLeftCircle style={{ fontSize: "18px" }} />
      </ArrowContainer>
      <div>
        <Wrapper>
          <SlideContainer bg="f5fafd">
            <ImageContainer>
              <Image src="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
            </ImageContainer>
            <InfoContainer>
              <Title>Mega Sale!!</Title>
              <Description>
                DON'T COMPROMISE ON STYLE! GET 30% OFF FOR NEW ARRIVALS
              </Description>
              <Button>Shop Now!!</Button>
            </InfoContainer>
          </SlideContainer>
          <SlideContainer bg="fcf1ed">
            <ImageContainer>
              <Image src="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
            </ImageContainer>
            <InfoContainer>
              <Title>Mega Sale!!</Title>
              <Description>
                DON'T COMPROMISE ON STYLE! GET 30% OFF FOR NEW ARRIVALS
              </Description>
              <Button>Shop Now!!</Button>
            </InfoContainer>
          </SlideContainer>
          <SlideContainer>
            <ImageContainer>
              <Image src="https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" />
            </ImageContainer>
            <InfoContainer>
              <Title>Summer Sale!!</Title>
              <Description>
                DON'T COMPROMISE ON STYLE! GET 30% OFF FOR NEW ARRIVALS
              </Description>
              <Button>Shop Now!!</Button>
            </InfoContainer>
          </SlideContainer>
        </Wrapper>
      </div>
      <ArrowContainer direction="right" onClick={() => handleClick("left")}>
        <BsArrowRightCircle style={{ fontSize: "18px" }} />
      </ArrowContainer>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.h5`
  margin: 50px 0;
  font-size: 30px;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
`;

const SlideContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
  margin-right: 20px;
`;
const InfoContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 70%;
`;

const Container = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;
  display: flex;
`;

const ArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  background-color: white;
  opacity: 0.5;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  cursor: pointer;
  right: ${(props) => props.direction === "right" && "10px"};
`;

export default Slider;
