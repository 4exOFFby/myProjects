import Styled from "styled-components";
import { Container } from "../Container/style";
import { AcceptedButton } from "../AcceptedButton/AcceptedButton";


const ResultSection = Styled.section`
  background-color: inherit;
  padding: 30px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: none;
  color: inherit;
`;

const ResultContainer = Styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ResultMoreButton = Styled(AcceptedButton)`
  align-self: center;
  margin-bottom: 30px;

`;

const ResultBackButton = Styled(AcceptedButton)`
  align-self: center;
  background-color: ${(props) => props.theme.buttonColorReset}
`;

export {
  ResultSection,
  ResultContainer,
  ResultMoreButton,
  ResultBackButton
}