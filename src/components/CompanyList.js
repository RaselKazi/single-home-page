import React from "react";
import styled from "styled-components";
import img1 from "../img/logo-seek.png";
import img2 from "../img/logo-xero.png";
import img3 from "../img/rea.png";
import img4 from "../img/rmit.png";
import img5 from "../img/ibm.png";
import img6 from "../img/deliveroo.png";
import demo1 from "../video/connectedness.webm";
import demo2 from "../video/flexibility.webm";
import demo3 from "../video/speed.webm";
import { BsArrowRight } from "react-icons/bs";
const Container = styled.div`
  background-color: #f7f2f7;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Wrapper = styled.div`
  align-items: center;
  color: white;
  width: 80%;
  margin: auto;
  justify-content: space-between;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: auto;
  justify-content: space-between;
`;
const H5 = styled.h5`
  color: black;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 20px;
  }
`;
const Design = styled.div`
  align-items: center;
  margin: auto;
  padding-bottom: 50px;

  justify-content: space-around;
`;
const Left = styled.div`
  width: 50%;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  margin-top: 50px;
  height: 100%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const DesignDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 50px;
  color: black;
`;
const Description = styled.p`
  margin: 10px;
  color: black;
  width: 66%;
  line-height: 20px;
`;
const Video = styled.video`
  margin-top: 30px;
  width: 80%;
  height: 100%;
`;
const LinkTag = styled.p`
  margin-top: 10px;
  color: #4285f4;
`;
const ArrowIcon = styled.span`
  color: red;
  color: #4285f4;
  margin-top: 3px;
  margin-left: 10px;
  font-size: 20px;
  position: absolute; ;
`;

const CompanyList = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div>
      <Container>
        <Wrapper>
          <H5> TRUSTED BY COMPANIES ALL OVER THE WORLD</H5>
          <Div>
            {images.map((img) => (
              <img src={img} alt="" />
            ))}
          </Div>
          {/* *********design*************** */}
          <Design>
            <DesignDiv>
              <Left>
                <Video loop autoPlay muted controls="">
                  <source src={demo1} type="video/webm" />
                </Video>
              </Left>
              <Right>
                <Title>Bring your team together </Title>
                <Description>
                  {" "}
                  At the heart of Slack are channels: organised spaces for
                  everyone and everything that you need for work. In channels,
                  it’s easier to connect across departments, offices, time zones
                  and even other companies.
                  <LinkTag>
                    {" "}
                    Learn more about channels{" "}
                    <ArrowIcon>
                      {" "}
                      <BsArrowRight />
                    </ArrowIcon>
                  </LinkTag>
                </Description>
              </Right>
            </DesignDiv>
            <DesignDiv>
              <Left>
                <Title>
                  Choose how you <br /> want to work{" "}
                </Title>
                <Description>
                  {" "}
                  In Slack, you’ve got all the flexibility to work when, where
                  and how it’s best for you. You can easily chat, send audio and
                  video clips, or join a huddle to talk things through live.
                  <LinkTag>
                    {" "}
                    Learn more about channels{" "}
                    <ArrowIcon>
                      {" "}
                      <BsArrowRight />
                    </ArrowIcon>
                  </LinkTag>
                </Description>
              </Left>
              <Right>
                <Video loop autoPlay muted controls="">
                  <source src={demo2} type="video/webm" />
                </Video>
              </Right>
            </DesignDiv>
            <DesignDiv>
              <Left>
                <Video loop autoPlay muted controls="">
                  <source src={demo3} type="video/webm" />
                </Video>
              </Left>
              <Right>
                <Title>Move faster with your tools in one place </Title>
                <Description>
                  {" "}
                  With your other work apps connected to Slack, you can work
                  faster by switching tabs less. And with powerful tools like
                  Workflow Builder, you can automate away routine tasks.
                  <LinkTag>
                    {" "}
                    Learn more about channels{" "}
                    <ArrowIcon>
                      {" "}
                      <BsArrowRight />
                    </ArrowIcon>
                  </LinkTag>
                </Description>
              </Right>
            </DesignDiv>
          </Design>
        </Wrapper>
      </Container>
    </div>
  );
};

export default CompanyList;
