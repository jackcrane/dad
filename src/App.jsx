import React, { useState } from "react";
import "./global.css";
import { styled } from "styled-components";
import { images } from "./images";

const colors = {
  blue: "#79addc",
  pink: "#ffc09f",
  yellow: "#ffee93",
  tan: "#fcf5c7",
  green: "#adf7b6",
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  background-color: ${colors.blue};
  min-height: 100%;
  width: calc(100% - 40px);
  max-width: 950px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 150px;
  margin: 0;
  @media screen and (max-width: 800px) {
    font-size: 120px;
  }
  @media screen and (max-width: 630px) {
    font-size: 90px;
  }
  @media screen and (max-width: 500px) {
    font-size: 70px;
  }
  @media screen and (max-width: 380px) {
    font-size: 50px;
  }
  color: ${colors.pink};
  line-height: 0.8;
`;

const Subtitle = styled.h2`
  font-size: 50px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
  margin: 0;
  color: ${colors.pink};
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;

  width: 300px;
  @media screen and (max-width: 430px) {
    /* width: 80%; */
    width: 250px;
  }
  @media screen and (max-width: 350px) {
    width: 200px;
  }
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  margin: 20px;
  z-index: 1000;
  transition: all 0.2s ease-in-out;
  rotate: ${() => Math.random() * (5 - -5) + -5}deg;
  &:hover {
    rotate: 0deg;
  }
`;

const Image = styled.img`
  width: 100%;
  /* height: auto; */
`;

const Caption = styled.p`
  font-size: 20px;

  font-family: "Gochi Hand", cursive;
`;

const Photo = (props) => (
  <PhotoContainer>
    <Image src={props.src} />
    <Caption>{props.alt}</Caption>
  </PhotoContainer>
);

const Header = styled.div`
  height: 80vh;
  @media screen and (max-width: 500px) {
    height: 60vh;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  max-width: 950px;
`;

const PhotosContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 80vh;
  @media screen and (max-width: 500px) {
    margin-top: 60vh;
  }
  margin-bottom: 200px;
`;

const HeaderTop = styled(Header)`
  z-index: 30000;
  opacity: ${(props) => (props.transparent ? 0.2 : 0.6)};
`;

const randomize = (arr) => {
  const newArr = [];
  while (arr.length > 0) {
    const index = Math.floor(Math.random() * arr.length);
    newArr.push(arr.splice(index, 1)[0]);
  }
  return newArr;
};

export default () => {
  const [transparent, setTransparent] = useState(false);
  return (
    <Container>
      <Header>
        <Subtitle>I might be biased but...</Subtitle>
        <Title>i have the awesomest dad ever!</Title>
      </Header>
      <PhotosContainer>
        {randomize(images).map((image) => (
          <Photo src={image.src} alt={image.alt} />
        ))}
      </PhotosContainer>
    </Container>
  );
};
