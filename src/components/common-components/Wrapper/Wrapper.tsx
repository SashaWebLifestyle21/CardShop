import React from "react";
import styled from 'styled-components';
import { BOX } from "../Box/Box";

interface IWrapperProps{
    children: React.ReactNode
    width?: number
    padding?: number
    margin?: string
}

interface IWrapper{
    width?: number
    padding?: number
    margin?: string
}

export const WrapperBlock = styled(BOX)<IWrapper>`
  padding: ${props => props.padding || 16}px;
  max-width: ${props => props.width || 1232}px;
  width: 100%;
  margin: ${props => props.margin || '0 auto'};
`

const Wrapper = ({ children, width, padding, margin }: IWrapperProps) => {
    return (
        <WrapperBlock
            width={width}
            padding={padding}
            margin={margin}
        >
            {children}
        </WrapperBlock>
    )
}

export default Wrapper