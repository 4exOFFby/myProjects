import Styled, { keyframes } from "styled-components";

const levitade = keyframes`
    0% {
        transform: translateY(0) rotate(0deg);
    }
    20% {
        transform: translateY(5px) rotate(10deg);
    }
    40% {
        transform: translateX(-10px) rotate(-10deg);
    }
    60% {
        transform: translateX(10px) rotate(0deg);
    }
    80% {
        transform: translateY(-5px) rotate(-10deg);
    }
    100% {
        transform: translateY(0) rotate(0deg);
    }
`;

const MainScreenImage = Styled.img`
    display: block;
    width: 300px;
    height: 300px;
    pointer-events: none;
    margin: 0 auto 25px auto;
    animation: ${levitade} 8s infinite linear;

    @media (max-width: 1199px) {
        margin-bottom: 40px;
    }

    @media (max-width: 767px) {
        margin-bottom: 40px;
        width: 200px;
        height: 200px;
    }
`;

export {MainScreenImage};