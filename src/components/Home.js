import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import homevideo from "../video/home.webm";
const Container = styled.div`
  background-color: #400d40;
  height: 90vh;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: auto;
  }
`;
const Wrapper = styled.div`
  display: flex;
  color: white;
  width: 80%;
  justify-content: space-between;
  margin: auto;
`;

const Left = styled.div`
  width: 60%;
  margin-top: 50px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const H1 = styled.h1`
  font-size: 70px;
  margin-top: 30px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 20px;
  }
`;

const Right = styled.div`
  margin-top: 50px;
  height: 100%;
  width: 50%;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const P = styled.p`
  width: 60%;
  font-size: 20px;
  margin: 20px 0;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const P1 = styled.span`
 color:#ecb22e !important;
  
  }
`;
const Button1 = styled.button`
  padding: 18px 18px;
  background-color: white;
  color: #400d40;
  border-radius: 4px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const Button2 = styled.button`
  padding: 18px 18px;
  background-color: #4285f4;
  color: white;
  border-radius: 4px;
  font-weight: 400;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const GoogleBtn = styled.span`
  background-color: white;
  padding: 15px;
  margin-left: -16px;
  margin-right: 10px;
  font-size: 14px;
`;
const Video = styled.video`
  margin-top: 50px;

  width: 100%;
  height: 100%;
`;
const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <H1>Great teamwork starts with a digital HQ</H1>
          <P>
            {" "}
            <P1>Slack is free to try</P1> for as long as you like
          </P>
          <Button1> SING UP WITH EMAIL ADDRESS</Button1>
          <Button2>
            {" "}
            <GoogleBtn>
              <FcGoogle />
            </GoogleBtn>
            SING UP WITH GOOGLE
          </Button2>
        </Left>
        <Right>
          <Video loop autoPlay muted controls="">
            <source src={homevideo} type="video/webm" />
          </Video>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Home;
