import React from "react";
import { NotationSection, NotationContainer, NotationTitle, NotationButton } from './style'



export function Notation ({setVisible, themeToggler, theme}) {
  return (
    <NotationSection>
      <NotationContainer>
        <NotationTitle> {theme === 'dark' ? 'Трусишка!' : 'Ты супер!'}</NotationTitle>
        <NotationButton text="На главную" type="button" onClick={() => {setVisible(1); themeToggler()}}></NotationButton>
      </NotationContainer>
    </NotationSection>
  )
};