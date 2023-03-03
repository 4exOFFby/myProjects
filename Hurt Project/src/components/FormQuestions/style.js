import Styled, { keyframes } from "styled-components";
import { AcceptedButton } from '../AcceptedButton/AcceptedButton';
import { Container } from '../Container/style';
import { MainScreenImage } from '../AnimatedImage/style';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const FormSection = Styled.section`
  background-color: inherit;
  color: inherit;
  padding: 30px 0;

  @media (max-width: 767px) {
    padding: 25px 0;
  }
`;

const StyledFormQuestions = Styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  order: -1;

  @media (max-width: 1199px) {
    width: 42%;
  }

  @media (max-width: 767px) {
    width: 100%;
    order: 0;
  }
`;

const FormScreenImage = Styled(MainScreenImage)`
  width: 60%;
  height: 600px;
  animation: ${rotate} infinite 25s linear;

  @media (max-width: 1199px) {
    width: 45%;
    height: 350px;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    width: 130px;
    height: 150px;
    margin: 0 auto 30px auto;
  }
`;

const FormContainer = Styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FormAcceptedButton = Styled(AcceptedButton)`
  margin-top: 15px;
  padding: 14px 20px;

  @media (max-width: 1199px) {
    width: 100%;
    min-height: 40px;
  }

  @media (max-width: 767px) {
    width: 100%;
    min-height: 40px;
    padding: 14px 20px;
  }
`;

const FormResetButton = Styled(AcceptedButton)`
  background-color: ${(props) => props.theme.buttonColorReset};
  margin-top: 20px;
  padding: 6px 20px;

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export {
  FormSection,
  StyledFormQuestions,
  FormScreenImage,
  FormContainer,
  FormAcceptedButton,
  FormResetButton
};