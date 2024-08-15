import React from "react";
import styled from "styled-components";

const MediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px; /* Menos padding en pantallas pequeñas */
  }
`;

const Media = styled.img`
  max-width: 100%; /* Asegura que la imagen no exceda el contenedor */
  height: auto;
  border-radius: 20px;

  @media (max-width: 768px) {
    max-width: 90%; /* Ajuste del ancho máximo en pantallas pequeñas */
  }
`;

const MediaDisplay = ({ type, src }) => {
  return (
    <MediaWrapper>
      <Media src={src} />
    </MediaWrapper>
  );
};

export default MediaDisplay;
