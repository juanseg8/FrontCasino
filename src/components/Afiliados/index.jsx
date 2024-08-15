import React from "react";
import styled from "styled-components";
import FAQ from "../FQA";
import SocialMediaButtons from "../SocialMediaButtons";

const Container = styled.div`
  margin: 20px;
  padding: 0 20px;
  color: #ffffff; /* Cambiar el color del texto a blanco para mejor contraste */

  @media (min-width: 768px) {
    margin: 50px;
  }

  @media (min-width: 1024px) {
    margin: 100px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffd700; /* Color dorado para resaltar */
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  color: #ffd700; /* Color dorado para resaltar */
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  background-color: #ffd700;
  color: #000000;
  border-radius: 25px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e4c204;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const AffiliateContent = () => {
  return (
    <Container>
      <Title>
        Bienvenido a los afiliados de Infinity. Únete a nosotros y gana dinero
        invitando a gente a Infinity.com
      </Title>
      <Subtitle>Planes de comision</Subtitle>
      <Paragraph>
        Empieza a promocionar Infinity y gana en función del tamaño de tu
        audiencia. El diseño suave del sitio web y el proceso de registro fácil,
        de 30 segundos, significa más clientes potenciales para su tráfico.
        ¡Obtenga pagos sobre la base de la cuota de ingresos, CPA, o acuerdo
        híbrido! En MyStake, cada afiliado tiene su propio gerente de afiliados
        que está listo para responder a todas sus preguntas.
      </Paragraph>
      <ButtonContainer className="mt-5">
        <Button>Cuota de ingreso</Button>
        <Button>CPA</Button>
        <Button>Híbrido</Button>
      </ButtonContainer>
      <Subtitle>Por qué Infinity</Subtitle>
      <ButtonContainer>
        <Button>Ingresos de por vida</Button>
        <Button>Comisiones flexibles</Button>
        <Button>Pagos puntuales</Button>
        <Button>No hay arrastre negativo</Button>
      </ButtonContainer>
      <Subtitle>Servicio al cliente</Subtitle>
      <Paragraph>
        Quizá le interesen las preguntas más frecuentes. Si ya es nuestro socio
        afiliado, lea nuestra Guía para principiantes. ¿Sigue necesitando ayuda?
        Póngase en contacto con nosotros a través de la dirección de correo
        electrónico indicada a continuación.
      </Paragraph>
      <FAQ />
      <Subtitle>Contáctanos</Subtitle>
      <SocialMediaButtons />
    </Container>
  );
};

export default AffiliateContent;
