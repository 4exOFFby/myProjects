import React from "react";
import { ResultSection, ResultContainer } from './style';
import { Description } from '../MainScreen/style';
import { ResultMoreButton, ResultBackButton } from './style';
import { user } from '../FormQuestions/FormQuestions';
import { DATA_HURT, DATA_HAPPY } from "../../assets/mock";


const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function ResultScreen ({setVisible, themeToggler, theme}) {
  const clearText = () => {
    user.name = '';
    user.age = '';
    user.scare = '';
    user.cash = '';
    user.email = '';
    user.acceptation = '';
  };

  if (theme === 'dark') {
    return (
      <ResultSection>
        <ResultContainer>
          <Description>
           Тебе {user.age}!? А выглядишь как {DATA_HURT.compare[getRandomInt(0,9)]} &#173; 
           {user.name} - звучит, как будто {DATA_HURT.compare_2[getRandomInt(0,9)]} &#173; 
           Что за фамилия - {user.scare}!? C такой фамилией лучше {DATA_HURT.compare_3[getRandomInt(0,9)]} &#173; 
           Ты реально зарабатываешь {user.cash}!? {DATA_HURT.compare_4[getRandomInt(0,9)]} &#173;
           Кто в здравом уме мог придумать такую почту - {user.email}!? {DATA_HURT.compare_5[getRandomInt(0,9)]} &#173;
           {user.acceptation}!? А я что просил написать!? С такой внимательностью тебе лучше {DATA_HURT.compare_6[getRandomInt(0,9)]}
          </Description>
          <ResultMoreButton text="Ещё..." onClick={() => {setVisible(2); clearText();}} />
          <ResultBackButton text="На главную" onClick={() => {setVisible(1); clearText(); themeToggler()}} />
        </ResultContainer>
      </ResultSection>
    )
  }

  return (
    <ResultSection>
      <ResultContainer>
        <Description>
         Тебе {user.age}!? А выглядишь как {DATA_HAPPY.compare[getRandomInt(0,9)]} &#173; 
         {user.name} - звучит так здорово, как будто {DATA_HAPPY.compare_2[getRandomInt(0,9)]} &#173; 
         Что за чудесная фамилия - {user.scare}!? С такой фамилией лучше {DATA_HAPPY.compare_3[getRandomInt(0,9)]} &#173; 
         Ты реально зарабатываешь {user.cash}!? {DATA_HAPPY.compare_4[getRandomInt(0,9)]} &#173;
         И как тебе удалось придумать такую креативную почту - {user.email}!? {DATA_HAPPY.compare_5[getRandomInt(0,9)]} &#173;
         {user.acceptation}!? Не смотря на то, что это не совсем то, что я просил написать - ты {DATA_HAPPY.compare_6[getRandomInt(0,9)]}
        </Description>
        <ResultMoreButton text="Ещё..." onClick={() => {setVisible(2); clearText();}} />
        <ResultBackButton text="На главную" onClick={() => {setVisible(1); clearText(); themeToggler()}} />
      </ResultContainer>
    </ResultSection>
  )
};