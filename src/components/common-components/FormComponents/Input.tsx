import React from 'react';
import styled from "styled-components";

interface IInput {
    type: TInputTypes
    name?: string
    onChange?: (e: any) => void
    borderColor?: string
    placeholder?: string
}

interface IInputWrapper {
    borderColor?: string
}

export type TInputTypes =
    | "text"
    | "password"
    | "submit"
    | "radio"
    | "checkbox"
    | "button"
    | "tel"
    | "email"
    | "date"
    | "number"

const InputWrapper = styled.input<IInputWrapper>`
  border: 1px solid ${props => props.borderColor || props.theme.colors.lightGrey};
  padding: 5px;
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
  border-radius: 5px;
  transition: all .3s linear;
  max-width: 300px;
  width: 100%;
  
  &:hover {
    background-color: ${props => props.theme.colors.footer};
  }
  &:focus {
    outline: none;
    border: 2px solid ${ props => props.borderColor || props.theme.colors.grey};
  }
`

const Input = ({ type, name, onChange, borderColor, placeholder }: IInput) => {
    return (
        <InputWrapper
            type={type}
            name={name}
            onChange={onChange}
            borderColor={borderColor}
            placeholder={placeholder}
        />
    );
};

export default Input;