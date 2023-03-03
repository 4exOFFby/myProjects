import React from "react";
import { ThemeTogglerWrapper, ThemeTogglerText, ThemeTogglerInput, ThemeTogglerField } from './style';



function ThemeToggler ({onClick}) {

  return (
    <ThemeTogglerWrapper>
      <ThemeTogglerText>Оскорбление</ThemeTogglerText>
      <ThemeTogglerInput type="checkbox" id="theme" />
      <ThemeTogglerField htmlFor="theme" onClick={onClick}/>
      <ThemeTogglerText>Поддержка</ThemeTogglerText>
    </ThemeTogglerWrapper>
  )
}


export {ThemeToggler};