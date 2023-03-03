import Styled from "styled-components";
import { Container } from "../Container/style";
import { AcceptedButton } from "../AcceptedButton/AcceptedButton";

const NotationSection = Styled.section`
  font-family: "Neucha", "Arial", sans-serif;
  background-color: inherit;
  color: inherit;
  height: 100vh;
`;

const NotationContainer = Styled(Container)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotationTitle = Styled.h2`
  font-size: 50px;
`;

const NotationButton = Styled(AcceptedButton)`
  align-self: center;
  width: auto;
`

export {
  NotationSection,
  NotationContainer,
  NotationTitle,
  NotationButton
}