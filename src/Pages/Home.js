import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Shoes1 from "../Components/Walksy.img/background_img/shoes 1.jpg";
import Shoes2 from "../Components/Walksy.img/background_img/shoes 2.jpg";
import Shoes3 from "../Components/Walksy.img/background_img/shoes 3.jpg";

const ImageContainer = styled.div`
  width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 100px;
  margin: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.h5`
  font-family: "Poiret One", serif;
  font-weight: 400;
  text-align: center;
  color: black;
  font-size: 32px;
  margin: 10px 0;

  &::after {
    content: "";
    display: block;
    width: 57%;
    height: 2px;
    background-color: black;
    margin: 2px auto 0;
  }
`;

const Button = styled.button`
  font-family: "Poiret One", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.8rem;
  color: black;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50px;
  padding: 1rem 5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: fadeIn 0.5s ease-in-out forwards;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

function Home() {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <ImageContainer>
          <img src={Shoes1} alt="Shoes 1" />
        </ImageContainer>
        <ImageContainer>
          <img src={Shoes2} alt="Shoes 2" />
        </ImageContainer>
        <ImageContainer>
          <img src={Shoes3} alt="Shoes 3" />
        </ImageContainer>
      </Row>

      <Text>Мода, яка рухається вперед разом з тобою!</Text>

      <ButtonContainer>
        <Link to="/New-shoes">
          <Button>Shop Now</Button>
        </Link>
      </ButtonContainer>
    </Container>
  );
}

export default Home;
