import Styled from "styled-components";

const Button = Styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.buttonColorAccept};
  color: black;
  padding: 4px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Lobster", "Arial", sans-serif;
  font-size: 24px;
  align-self: flex-start;
  transition: 0.2s linear;

  &:hover {
    color: white;
  }

  @media (max-width: 1199px) {
    padding: 15px 30px;
    align-self: flex-start;
    width: 40%;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 10px 25px;
  }
`;

export {Button};