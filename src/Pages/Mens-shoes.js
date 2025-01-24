import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import styled from "styled-components";

import Heart from "../Components/Walksy.img/Icons/4243262_ux_heart_app_basic_icon.png";
import Eye from "../Components/Walksy.img/Icons/game_skill_ui_eagle_eye_hawk_sight-256.webp";
import Bag from "../Components/Walksy.img/Icons/8150278_bag_carry bag_shopping bag_briefcase_shop_icon.png";

import Shoes20 from "../Components/Walksy.img/Men`s shoes/5bca6c19-5048-489d-b859-757c3111c954-removebg-preview.png";
import Shoes21 from "../Components/Walksy.img/Men`s shoes/1009c238-9e93-4795-b397-fef3e327adc0-removebg-preview.png";
import Shoes22 from "../Components/Walksy.img/Men`s shoes/ea25c52c-dffc-41f0-9cca-ae5bc7bcd273-removebg-preview.png";
import Shoes23 from "../Components/Walksy.img/Men`s shoes/modern-elegance-black-leather-sports-shoes-shine-generated-by-ai.png";
import Shoes24 from "../Components/Walksy.img/Men`s shoes/shoes.jpg";
import Shoes25 from "../Components/Walksy.img/Men`s shoes/cool-canvas-sneakers-men-s-apparel-summer-fashion-photoshoot-b.png";
import Shoes26 from "../Components/Walksy.img/Men`s shoes/man-s-leg-white-sneakers.png";
import Shoes27 from "../Components/Walksy.img/Men`s shoes/beautiful-black-leather-shoes.png";
import Shoes28 from "../Components/Walksy.img/Men`s shoes/fashion-shoes-sneakers.png";
import Shoes29 from "../Components/Walksy.img/Men`s shoes/childhood-cute-pair-child-baby.png";
import Shoes30 from "../Components/Walksy.img/Men`s shoes/blue-sports-shoe-untied-ready-action-generated-by-ai.png";
import Shoes31 from "../Components/Walksy.img/Men`s shoes/new-sneakers.png";

const shoes = [
  {
    id: 1,
    price: "3,700₴",
    image: Shoes20,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 2,
    price: "2,800₴",
    image: Shoes21,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 3,
    price: "2,000₴",
    image: Shoes22,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 4,
    price: "1,300₴",
    image: Shoes23,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 5,
    price: "3,250₴",
    image: Shoes24,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 6,
    price: "2,750₴",
    image: Shoes25,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 7,
    price: "2,900₴",
    image: Shoes26,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 8,
    price: "4,300₴",
    image: Shoes27,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 9,
    price: "3,999₴",
    image: Shoes28,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 10,
    price: "2,250₴",
    image: Shoes29,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 11,
    price: "1,200₴",
    image: Shoes30,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 12,
    price: "3,600₴",
    image: Shoes31,
    colors: ["Black", "White", "Brown"],
  },
];

const sizes = ["37", "38", "39", "40", "41", "42", "43"];

const TopBar = styled.div`
  width: 98.9vw;
  height: 3px;
  background-color: black;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-family: "Poiret One", serif;
  color: #000;
  margin-bottom: 1.5rem;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  display: block;
  text-align: center;
`;

const BuyButton = styled.button`
  font-family: "Poiret One", serif;
  font-weight: 600;
  font-size: 17px;
  color: black;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50px;
  padding: 0.4rem 1.7rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  gap: 8px;

  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CustomCard = styled(Card)`
  width: 250px;
  height: 350px;
  border-radius: 30px;
  border-color: black;
  overflow: hidden;
  position: relative;
  text-align: center;
  font-family: "Poiret One", serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .new-label {
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 23px;
    color: black;
  }

  .icon-container {
    position: absolute;
    top: 10px;
    right: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const CardImage = styled(Card.Img)`
  width: 100%;
  height: 60%;
  object-fit: contain;
  padding: 5px;
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
`;

const SizeButton = styled.button`
  font-family: "Poiret One", serif;
  font-weight: 600;
  font-size: 12px;
  color: black;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50px;
  padding: 0.4rem 1.7rem;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  ${(props) =>
    props.selected &&
    ` 
    background-color: black;
    color: white;
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  `}

  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const slideIn = `
  @keyframes slideIn {
    0% {
      transform: rotateY(90deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0);
      opacity: 1;
    }
  }
`;

const slideOut = `
  @keyframes slideOut {
    0% {
      transform: rotateY(0);
      opacity: 1;
    }
    100% {
      transform: rotateY(90deg);
      opacity: 0;
    }
  }
`;

const CustomModal = styled(Modal)`
  ${slideIn}
  ${slideOut}

  .modal-dialog {
    font-family: "Poiret One", serif;
    max-width: 90%;
    width: 350px;
    position: absolute;
    top: 10%;
    left: 38%;
    margin: 0;
    animation: ${(props) =>
      props.show ? "slideIn 0.5s forwards" : "slideOut 0.5s forwards"};
  }

  .modal-content {
    font-weight: bold;
    height: auto;
    overflow: hidden;
  }

  .modal-body {
    padding: 20px;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .modal-dialog {
      width: 90%;
    }
  }

  @media (max-width: 576px) {
    .modal-dialog {
      width: 95%;
    }
  }
`;

const ToggleButton = styled.button`
  font-family: "Poiret One", serif;
  font-weight: 600;
  font-size: 18px;
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  transition: transform 0.3s ease;
  display: inline-block;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

const SizeList = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  margin-top: 10px;
`;

const ColorList = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  margin-top: 10px;
`;

const ActionButton = styled(Button)`
  font-weight: bold;
  background-color: transparent;
  border: 2px solid black;
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    outline: none;
  }

  &:active {
    transform: scale(0.95);
    outline: none;
  }
`;

const CustomModalTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  font-family: "Poiret One", serif;
  color: #333;
`;

function MensShoes() {
  const [show, setShow] = useState(false);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [showSizes, setShowSizes] = useState(false);
  const [showColors, setShowColors] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (shoe) => {
    setSelectedShoe(shoe);
    setShow(true);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const toggleSizeList = () => {
    setShowSizes((prevState) => !prevState);
  };

  const toggleColorList = () => {
    setShowColors((prevState) => !prevState);
  };

  return (
    <Container className="d-flex flex-column align-items-center">
      <TopBar />
      <Title>Mens Shoes</Title>
      <Row className="g-4 justify-content-center">
        {shoes.map((shoe) => (
          <Col key={shoe.id} xs={12} sm={6} md={3} lg={3}>
            <CustomCard>
              <span className="new-label">New</span>
              <div className="icon-container">
                <img src={Heart} alt="heart" width="24" height="24" />
                <img src={Eye} alt="eye" width="24" height="24" />
              </div>
              <CardImage variant="top" src={shoe.image} alt="Shoe" />
              <CardFooter>
                <Price>{shoe.price}</Price>
                <BuyButton onClick={() => handleShow(shoe)}>
                  Buy
                  <img src={Bag} alt="icon-bag" width="24" height="24" />
                </BuyButton>
              </CardFooter>
            </CustomCard>
          </Col>
        ))}
      </Row>

      {selectedShoe && (
        <CustomModal show={show} onHide={handleClose} size="md">
          <Modal.Header closeButton>
            <CustomModalTitle>Детальніше про товар</CustomModalTitle>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedShoe.image}
              alt="Selected Shoe"
              style={{ width: "100%", height: "auto" }}
            />
            <p>Ціна: {selectedShoe.price}</p>
            <p>
              Обрати потрібний розмір:{" "}
              <ToggleButton onClick={toggleSizeList}>{"﹀"}</ToggleButton>
            </p>
            <SizeList show={showSizes}>
              {sizes.map((size) => (
                <SizeButton
                  key={size}
                  selected={selectedSize === size}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </SizeButton>
              ))}
            </SizeList>
            <p>
              Обрати колір:{" "}
              <ToggleButton onClick={toggleColorList}>{"﹀"}</ToggleButton>
            </p>
            <ColorList show={showColors}>
              {selectedShoe.colors.map((color) => (
                <SizeButton
                  key={color}
                  selected={selectedColor === color}
                  onClick={() => handleColorSelect(color)}
                >
                  {color}
                </SizeButton>
              ))}
            </ColorList>
          </Modal.Body>
          <Modal.Footer>
            <ActionButton onClick={handleClose}>Close</ActionButton>
            <ActionButton onClick={handleClose}>Buy Now</ActionButton>
          </Modal.Footer>
        </CustomModal>
      )}
    </Container>
  );
}

export default MensShoes;
