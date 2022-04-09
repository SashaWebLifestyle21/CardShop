import React from "react";
import styled from "styled-components";

interface ITitle {
    children: string
    width?: number
    mb?: number
}

const TITLE = styled.h2<ITitle>`
  font-size: ${props => props.theme.fontSize.s36};
  text-align: center;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  width: ${props => props.width}px;
  color: ${props => props.theme.colors.primary};
  margin: 0 auto;
  margin-bottom: ${props => props.mb || 0}px;
`

const Title = ( { children, width, mb }: ITitle) => {
    return (
        <TITLE width={ width } mb={ mb }>{ children }</TITLE>
    )
}

export default Title