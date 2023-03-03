import Styled from 'styled-components';

const Container= Styled.div`
  max-width: 1075px;
  padding: 0 120px;
  margin: 0 auto;

  @media (max-width: 1199px) {
    max-width: 900px;
    padding: 0 45px;
  }

  @media (max-width: 767px) {
    max-width: 737px;
    padding: 0 15px;
  }
`;

export {Container}