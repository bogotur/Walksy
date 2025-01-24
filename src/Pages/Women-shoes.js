import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import styled from "styled-components";

import Heart from "../Components/Walksy.img/Icons/4243262_ux_heart_app_basic_icon.png";
import Eye from "../Components/Walksy.img/Icons/game_skill_ui_eagle_eye_hawk_sight-256.webp";
import Bag from "../Components/Walksy.img/Icons/8150278_bag_carry bag_shopping bag_briefcase_shop_icon.png";

import Shoes7 from "../Components/Walksy.img/Women`s shoes/pink-woman-sneakers-with-leather-suede-fabrics-removebg-preview.png";
import Shoes8 from "../Components/Walksy.img/Women`s shoes/shiny-black-leather-shoes-exude-modern-luxury-generated-by-ai.png";
import Shoes9 from "../Components/Walksy.img/Women`s shoes/cream-woman-sneakers-with-colourful-stones-it-golden-details-removebg-preview.png";
import Shoes11 from "../Components/Walksy.img/Women`s shoes/woman-shoes.jpg";
import Shoes12 from "../Components/Walksy.img/Women`s shoes/basic-white-sneakers-unisex-streetwear-fashion-shoot-b.png";
import Shoes13 from "../Components/Walksy.img/Women`s shoes/classy-white-platform-shoes-stand-white-embroidered-cloth.png";
import Shoes14 from "../Components/Walksy.img/Women`s shoes/close-up-person-wearing-futuristic-sneake.png";
import Shoes15 from "../Components/Walksy.img/Women`s shoes/white-training-sneakers-unisex-sportswear-fashion-shoot.png";
import Shoes16 from "../Components/Walksy.img/Women`s shoes/view-skateboard-with-retro-memorabilia.png";
import Shoes17 from "../Components/Walksy.img/Women`s shoes/fashion-shoes-sneaker.png";
import Shoes18 from "../Components/Walksy.img/Women`s shoes/close-up-person-wearing-futuristic-sneakers-removebg-preview.png";
import Shoes19 from "../Components/Walksy.img/Women`s shoes/pink-canvas-sneakers-with-polka-dot-unisex-footwear-fashion-removebg-preview.png";

const shoes = [
  {
    id: 1,
    price: "2,200₴",
    image: Shoes7,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 2,
    price: "4,700₴",
    image: Shoes8,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 3,
    price: "1,500₴",
    image: Shoes9,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 5,
    price: "1,750₴",
    image: Shoes11,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 6,
    price: "5,000₴",
    image: Shoes12,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 7,
    price: "4,500₴",
    image: Shoes13,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 8,
    price: "3,150₴",
    image: Shoes14,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 9,
    price: "2,900₴",
    image: Shoes15,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 10,
    price: "1,800₴",
    image: Shoes16,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 11,
    price: "2,400₴",
    image: Shoes17,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 12,
    price: "1,300₴",
    image: Shoes18,
    colors: ["Black", "White", "Brown"],
  },
  {
    id: 13,
    price: "1,550₴",
    image: Shoes19,
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

function WomenShoes() {
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
      <Title>Women Shoes</Title>
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

export default WomenShoes;
