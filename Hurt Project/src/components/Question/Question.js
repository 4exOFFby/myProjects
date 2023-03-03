import React from "react";
import { InputWrapper, StyledLabel, StyledInput } from './style';

function Question ({text, name, type, id}) {
    return (
        <InputWrapper>
            <StyledLabel htmlFor={name}>{text}</StyledLabel>
            <StyledInput id={id} name={name} type={type} minLength={1} autoComplete="off" required/>
        </InputWrapper>
    )
}

export {Question};