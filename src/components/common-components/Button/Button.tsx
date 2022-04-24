import React from 'react'
import styled from "styled-components";
import { themes } from "../../../constants/themes";

interface IButton {
    borderColor?: string
    backgroundColor?: string
    color?: string
    ptb?: string
    prl?: string
    marginTop?: number
    marginBottom?: number
    marginLeft?: number
    marginRight?: number
    fontSize?: number
}

export const Button = styled.button<IButton>`
  padding: ${props => props.ptb || 12}px ${props => props.prl || 20}px;
  display: block;
  border: none;
  border-color: ${props => props.borderColor || themes.colors.white};
  color: ${props => props.color || themes.colors.white};
  background-color: ${props => props.backgroundColor || 'transparent'};
  border-radius: 5px;
  cursor: pointer;
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-left: ${props => props.marginLeft || 0}px;
  margin-right: ${props => props.marginRight || 0}px;
  font-size: ${props => props.fontSize}px;

  &:active{
    border: none;
  }
`