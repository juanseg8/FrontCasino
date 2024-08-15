import React, { useState } from "react";
import { playRockPaperScissors } from "../../api";
import styled, { keyframes } from "styled-components";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import ConfigApuesta from "../ConfigApuesta";

const StyledContainer = styled(Container)`
  background-color: #1b1e27;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 10px;
  }
`;

const StyledButtonGroup = styled(Row)`
  margin: 20px 0;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const ImageButton = styled(Button)`
  background-color: transparent;
  border: none;
  padding: 0;

  &:focus {
    background-color: transparent;
  }

  &:hover {
    background-color: transparent;
  }

  img {
    width: 120px; /* Ajuste del tamaño para pantallas grandes */
    height: 120px; /* Ajuste del tamaño para pantallas grandes */
    border-radius: 50%;
    transition: border 0.3s ease;
    animation: ${(props) => (props.active ? shakeAnimation : "none")} 0.5s
      infinite;

    @media (max-width: 768px) {
      width: 80px; /* Tamaño ajustado para pantallas pequeñas */
      height: 80px; /* Tamaño ajustado para pantallas pequeñas */
    }
  }
`;

const StyledBetContainer = styled(Row)`
  margin: 20px 0;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const RockPaperScissors = ({ user, setGifSrc }) => {
  const [choice, setChoice] = useState("rock");
  const [betAmount, setBetAmount] = useState(20);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const gameData = {
        phoneNumber: user.phoneNumber,
        choice,
        amount: betAmount,
      };
      const { data } = await playRockPaperScissors(token, gameData);

      let gifSrc = "";
      let soundSrc = "";

      if (choice === data.result) {
        // Empate
        gifSrc = `./${choice}Lose.gif`;
      } else if (
        (choice === "rock" && data.result === "scissors") ||
        (choice === "paper" && data.result === "rock") ||
        (choice === "scissors" && data.result === "paper")
      ) {
        // Ganar
        gifSrc = `./${data.result}Win.gif`;
        soundSrc = "./win.mp3";
      } else {
        // Perder
        gifSrc = `./${choice}Lose.gif`;
        soundSrc = "./lose.mp3";
      }

      setGifSrc(gifSrc);

      // Reproducir sonido
      const audio = new Audio(soundSrc);
      audio.play();

      setTimeout(() => {
        setGifSrc("./AnimacionRPS.gif");
      }, 3000); // Pausa de 3 segundos antes de ocultar la imagen
    } catch (error) {
      console.error("Game failed", error);
    }
  };

  return (
    <StyledContainer>
      <Form onSubmit={handleSubmit}>
        <StyledButtonGroup>
          <Col xs="auto">
            <ImageButton
              active={choice === "rock"}
              onClick={() => setChoice("rock")}
            >
              <img src={"./rock.png"} alt="rock" />
            </ImageButton>
          </Col>
          <Col xs="auto">
            <ImageButton
              active={choice === "paper"}
              onClick={() => setChoice("paper")}
            >
              <img src={"./paper.png"} alt="paper" />
            </ImageButton>
          </Col>
          <Col xs="auto">
            <ImageButton
              active={choice === "scissors"}
              onClick={() => setChoice("scissors")}
            >
              <img src={"./scissors.png"} alt="scissors" />
            </ImageButton>
          </Col>
        </StyledButtonGroup>
        <StyledBetContainer>
          <ConfigApuesta betAmount={betAmount} setBetAmount={setBetAmount} />
        </StyledBetContainer>
      </Form>
    </StyledContainer>
  );
};

export default RockPaperScissors;
