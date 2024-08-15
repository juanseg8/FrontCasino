import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

const StyledTypographySummary = styled(Typography)`
  font-size: 1.5rem;
`;

const StyledTypographyDetails = styled(Typography)`
  font-size: 1.5rem;
`;

export default function FAQ() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <StyledTypographySummary className="font-weight-bold">
            ¿Qué es el sistema Royal Casino Affiliates?
          </StyledTypographySummary>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypographyDetails>
            Royal Casino Affiliates es un programa en el que te damos la
            oportunidad de ganar dinero cada mes simplemente por darnos la
            oportunidad de recibir más jugadores a través de nuestras puertas
            virtuales.
          </StyledTypographyDetails>
          <StyledTypographyDetails className="mt-2">
            ¿Tienes canales sociales, grupos o sitios web relacionados con el
            juego? Entonces estaremos encantados de tenerte cerca. Agradecemos
            sinceramente su interés y deseo de colaborar con nosotros.
          </StyledTypographyDetails>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <StyledTypographySummary className="font-weight-bold">
            ¿Cómo puedo convertirme en socio de Royal Casino?
          </StyledTypographySummary>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypographyDetails>
            Sólo tiene que inscribirse en nuestro programa de afiliación, lo que
            no le llevará más de un minuto. Debes dirigirte a "depósitar" y
            luego ingresar a "sistema de referidos". Allí podrás obtener tu link
            de referido personalizado para comenzar a utilizar cuando lo desees
            y tendrás tu propio panel donde se reflejarán tus ganancias
            actualizadas.
          </StyledTypographyDetails>
          <StyledTypographyDetails className="mt-2">
            Puedes utilizar acortadores de enlaces como bitly.com, tinyurl.com,
            link.tree y otros. Esto no dañará el enlace de seguimiento.
          </StyledTypographyDetails>
          <StyledTypographyDetails className="mt-2">
            ¿Puedo tener fondos no retirables para el streaming? ¿Tienes Tiktok,
            Instagram o cualquier otro canal en el que tengas transmisiones en
            directo? Entonces claro. Puedes solicitar fondos de juego no
            retirables para minijuegos y apuestas deportivas.
          </StyledTypographyDetails>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <StyledTypographySummary className="font-weight-bold">
            ¿Cuál es el porcentaje de comisión que ofrecen a los afiliados?
          </StyledTypographySummary>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypographyDetails>
            La tasa de comisión está determinada por el país, el número de
            jugadores que traiga, el tipo de fuente de tráfico y otros factores.
          </StyledTypographyDetails>
          <StyledTypographyDetails className="mt-2">
            Ofrecemos las mejores comisiones del sector a nuestros mejores
            afiliados.
          </StyledTypographyDetails>
          <StyledTypographyDetails className="mt-2">
            Participación en los depósitos: es el porcentaje de depósitos que
            obtenemos de los jugadores que invitas. El porcentaje de ingresos
            varía entre el 10% y el 50%.
          </StyledTypographyDetails>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <StyledTypographySummary className="font-weight-bold">
            ¿Cómo se paga?
          </StyledTypographySummary>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypographyDetails>
            Los socios afiliados pueden solicitar el pago durante los días
            Sábados y Domingos, en cualquier momento del mes.
          </StyledTypographyDetails>
          <StyledTypographyDetails className="mt-2">
            Métodos de pago: transferencia bancaria, USD tether.
          </StyledTypographyDetails>
          <StyledTypographyDetails className="mt-2">
            El umbral mínimo de retirada es de 100 USD.
          </StyledTypographyDetails>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
