import React from "react";
import styled from "styled-components";

interface ITitle {
    children: React.ReactNode
    width?: number
    mb?: number
}

export const Title = styled.h2<ITitle>`
  font-size: 36px;
  text-align: center;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  width: ${props => props.width}px;
  color: ${props => props.theme.colors.primary};
  margin: 0 auto;
  margin-bottom: ${props => props.mb || 0}px;
`