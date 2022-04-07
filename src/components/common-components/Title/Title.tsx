import React from "react";
import styled from "styled-components";
import {themes} from "../../../constants/themes";

interface ITitle {
    children: string
    width?: string
    mb?: string
}

const TITLE = styled.h2<ITitle>`
  font-size: 36px;
  text-align: center;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  width: ${props => props.width}px;
  color: ${themes.colors.primary};
  margin: 0 auto;
  margin-bottom: ${props => props.mb || '0'}px;
`



const Title = ({children, width, mb}: ITitle) => {
    return (
        <TITLE width={width} mb={mb}>{children}</TITLE>
    )
}

export default Title