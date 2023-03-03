import Styled from "styled-components";

const ThemeTogglerWrapper = Styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  justify-content: space-between;
  align-self: center;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    width: 280px;
  }
`;

const ThemeTogglerText = Styled.span`
  font-family: ${(props) => props.theme.basicFont};
  font-size: 20px;
`;

const ThemeTogglerInput = Styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

const ThemeTogglerField = Styled.label`
  position: relative;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  display: block;
  background-color: ${({ theme }) => theme.backgroundCheckbox};
  cursor: pointer;

  &:hover {
      opacity: 0.9;
    }

  @media (max-width: 767px) {
    width: 60px;
  }

  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: 0;
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.theme.buttonColorAccept};
    border: 3px dashed brown;
    border-radius: 50%;
    transition: 0.45s linear;
  }

  input:checked + &::before {
    transform: rotate(360deg);
    transform: translate(65px);
    
    @media (max-width: 767px) {
      transform: translateX(25px);
    }
  }
`;

export {
  ThemeTogglerWrapper,
  ThemeTogglerText,
  ThemeTogglerInput,
  ThemeTogglerField
};