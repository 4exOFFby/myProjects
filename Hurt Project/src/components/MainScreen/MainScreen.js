import React from 'react';
import MainImage from '../../img/png/main-image.png';
import { MainScreenImage } from '../AnimatedImage/style';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { StyledMainScreen, MainScreenContainer, Title, Description, MainScreenButton } from './style';





function MainScreen ({setVisible, onClick}) {
    return (
        <StyledMainScreen>
        <MainScreenContainer>
            <MainScreenImage src={MainImage} alt="Шляпа из Гарри Поттера" width="300" height="300" />
            <Title>Приветствую тебя, усталый путник!</Title>
            <Description> 
                Это приложение создано исключительно для развлечения 
                и не ставит перед собой цели 
                нанести моральный или духовный вред пользователю! Выберете режим и 
                после ряда вопросов, прилажение сгенерирует оскорбительный или ободрительный текст про Вас!
                Нажмите на кнопку "Начать", если вы принимаете эти правила!
            </Description>
            <ThemeToggler onClick={onClick} />
            <MainScreenButton text="Начать" type="button" onClick={() => setVisible(2)} />
        </MainScreenContainer>
        </StyledMainScreen>
    )
}

export {MainScreen};