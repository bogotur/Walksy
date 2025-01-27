import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Modal, Form } from "react-bootstrap";

const SearchIcon = `${process.env.PUBLIC_URL}/images/find.png`;
const UserIcon = `${process.env.PUBLIC_URL}/images/acount.png`;
const HeartIcon = `${process.env.PUBLIC_URL}/images/heart.png`;
const BagIcon = `${process.env.PUBLIC_URL}/images/buys.png`;

const Instagram = `${process.env.PUBLIC_URL}/images/instagram.png`;
const Facebook = `${process.env.PUBLIC_URL}/images/facebook.png`;
const Google = `${process.env.PUBLIC_URL}/images/google.png`;
const titleStyle = {
  fontFamily: '"Poiret One", serif',
  fontWeight: 100,
  fontStyle: "normal",
  fontSize: "2.5rem",
  margin: 0,
};

const Button = styled.button`
  font-family: "Poiret One", serif;
  font-weight: 600;
  font-size: 1.125rem;
  color: black;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50px;
  padding: 0.6rem 1.2rem;
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

const IconWrapper = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  display: flex;
  gap: 8px;
  z-index: 10;
`;

const IconImg = styled.img`
  width: 22px;
  height: 22px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover input {
    width: 150px;
    opacity: 1;
    visibility: visible;
    transform: translateX(-23%);
  }

  &:hover {
    z-index: 5;
  }
`;

const SearchInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 30px;
  padding: 0 10px;
  font-size: 1rem;
  border: 1px solid #black;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.6s ease;
  transform: translateX(100%);

  &:focus {
    border-color: #ff0000;
  }
`;

const CustomModal = styled(Modal)`
  .modal-dialog {
    font-family: "Poiret One", serif;
    max-width: 90%;
    width: 350px;
    position: center;
    top: 23%;
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

const CustomModalTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  font-family: "Poiret One", serif;
  color: #333;
`;

const Input = styled(Form.Control)`
  margin-bottom: 15px;
  font-family: "Poiret One", serif;
  font-size: 1.1rem;
  border-radius: 50px;
  border-color: black;
  font-weight: bold;
`;

const ForgotPasswordLink = styled.p`
  font-family: "Poiret One", serif;
  font-size: 1rem;
  color: #1a1a1a;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    text-decoration: underline;
    color: black;
  }
`;

const IconWrapperForgotPassword = styled.div`
  display: flex;
  gap: 4px;
  margin-left: 10px;
  justify-content: flex-end;
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      login: "",
      password: "",
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleLoginChange = (event) => {
    this.setState({ login: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Логін:", this.state.login);
    console.log("Пароль:", this.state.password);
    this.handleClose();
  };

  render() {
    const { show, login, password } = this.state;

    return (
      <header className="container-fluid d-flex flex-column align-items-center px-3 py-3 border-bottom">
        <div className="row w-100 d-flex justify-content-center">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <p style={titleStyle} className="col-12 text-center">
              Walksy
            </p>
          </Link>
        </div>

        <nav className="row w-100 mt-3 justify-content-center">
          <div className="col-12 col-md-auto">
            <Link to="/new-shoes">
              <Button>Новинки</Button>
            </Link>
          </div>
          <div className="col-12 col-md-auto">
            <Link to="/women-shoes">
              <Button>Жіноче взуття</Button>
            </Link>
          </div>
          <div className="col-12 col-md-auto">
            <Link to="/mens-shoes">
              <Button>Чоловіче взуття</Button>
            </Link>
          </div>
          <div className="col-12 col-md-auto">
            <Link to="/action-shoes">
              <Button>Акції</Button>
            </Link>
          </div>
        </nav>

        <CustomModal show={show} onHide={this.handleClose} size="md">
          <Modal.Header closeButton>
            <CustomModalTitle>Вхід</CustomModalTitle>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Input
                type="text"
                placeholder="Логін"
                value={login}
                onChange={this.handleLoginChange}
                required
              />
              <Input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={this.handlePasswordChange}
                required
              />
              <ForgotPasswordLink>
                Забули пароль?
                <IconWrapperForgotPassword>
                  <IconImg src={Instagram} alt="Icon instagram" />
                  <IconImg src={Facebook} alt="Icon facebook" />
                  <IconImg src={Google} alt="Icon google" />
                </IconWrapperForgotPassword>
              </ForgotPasswordLink>
              <Button type="submit">Увійти</Button>
            </Form>
          </Modal.Body>
        </CustomModal>

        <IconWrapper>
          <SearchWrapper>
            <IconImg src={SearchIcon} alt="Search" />
            <SearchInput type="text" placeholder="Пошук..." />
          </SearchWrapper>
          <IconImg src={UserIcon} alt="User" onClick={this.handleShow} />
          <IconImg src={HeartIcon} alt="Heart" />
          <IconImg src={BagIcon} alt="Bag" />
        </IconWrapper>
      </header>
    );
  }
}
