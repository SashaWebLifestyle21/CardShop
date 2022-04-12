import React from "react";
import styled from 'styled-components';

interface IWrapperProps{
    children: any
    width?: number
    justifyContent?: TWrapperjustifyContentTypes
    padding?: number
}

type TWrapperjustifyContentTypes =
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

interface IWrapper{
    width?: number
    justifyContent?: TWrapperjustifyContentTypes
    padding?: number
}

const WrapperBlock = styled.div<IWrapper>`
  padding: ${props => props.padding || 16}px;
  max-width: ${props => props.width || 1232}px;
  width: 100%;
  margin: 0 auto;
  display: block;
  align-items: center;
  justify-content: ${props => props.justifyContent || 'start'};
`

const Wrapper = ({ children, width, justifyContent, padding }: IWrapperProps) => {
    return (
        <WrapperBlock
            width={width}
            justifyContent={justifyContent}
            padding={padding}
        >
            {children}
        </WrapperBlock>
    )
}

export default Wrapper