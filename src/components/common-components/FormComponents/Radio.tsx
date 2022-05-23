import React from 'react';
import styled from "styled-components";

interface IRadio {
    name: string
    children: React.ReactNode
    checked?: boolean
    onChange?: () => void
}


const RadioWrapper = styled.div`
  display: inline-block;
`;

const Mark = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid ${props => props.theme.colors.primary};
  width: 12px;
  height: 12px;
  left: 0;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
  }
`;

const Input = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${Mark} {
    &::after {
      width: 6px;
      height: 6px;
      opacity: 1;
      left: 20%;
      top: 20%;
    }
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  position: relative;

`;

const Radio = ({ name, children, checked, onChange }: IRadio) => (
    <RadioWrapper>
        <Label>
            <Input name={name} type="radio" checked={checked} onChange={onChange} />
            <Mark />
            {children}
        </Label>
    </RadioWrapper>
);

export default Radio;
