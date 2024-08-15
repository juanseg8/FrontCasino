import React from "react";
import styled from "styled-components";

// Estilos en JS usando styled-components
const BetSettingsWrapper = styled.div`
  padding: 20px;
  background-color: #1b1e27;
  border-radius: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #212433;
  padding: 15px;
  border-radius: 5px;
  flex: 1;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`;

const InputTitle = styled.span`
  color: #fff;
  font-size: 16px;
  margin-right: 10px;
`;

const InputField = styled.input`
  background-color: transparent;
  border: none;
  color: #20ff00;
  font-size: 24px;
  width: 100%;
  text-align: right;
  appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

const Currency = styled.span`
  color: #20ff00;
  font-size: 16px;
  margin-left: 5px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IncrementButton = styled.button`
  background-color: #30303d;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  font-size: 20px;
`;

const BetButton = styled.button`
  background-color: #20ff00;
  color: #000;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 60px;
  font-size: 24px;
  margin-top: 10px;
`;

const ConfigApuesta = ({ betAmount, setBetAmount }) => {
  const handleBetIncrement = () => {
    setBetAmount((prevAmount) => prevAmount + 10);
  };

  const handleBetDecrement = () => {
    setBetAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 10 : 0));
  };

  const handleInputChange = (e) => {
    const value = parseFloat(e.target.value);
    setBetAmount(value >= 0 ? value : 0); // Ensure the bet amount is non-negative
  };

  return (
    <BetSettingsWrapper>
      <InputGroup>
        <InputWrapper>
          <InputTitle>Bet</InputTitle>
          <InputField
            type="number"
            value={betAmount}
            onChange={handleInputChange}
          />
          <Currency>ARS</Currency>
          <ButtonsWrapper>
            <IncrementButton type="button" onClick={handleBetDecrement}>
              -
            </IncrementButton>
            <IncrementButton type="button" onClick={handleBetIncrement}>
              +
            </IncrementButton>
          </ButtonsWrapper>
        </InputWrapper>
        <BetButton>Apostar</BetButton>
      </InputGroup>
    </BetSettingsWrapper>
  );
};

export default ConfigApuesta;
