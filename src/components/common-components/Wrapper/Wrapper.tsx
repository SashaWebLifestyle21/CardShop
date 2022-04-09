import React from "react";
import styled from 'styled-components';

interface IWrapperProps{
    children: any
    width?: number
}

interface IWrapper{
    width?: number
}

const WrapperBlock = styled.div<IWrapper>`
  padding: 16px;
  max-width: ${props => props.width || 1232}px;
  width: 100%;
  margin: 0 auto;
`

const Wrapper = ( { children, width }: IWrapperProps ) => {
    return (
        <WrapperBlock width={ width }>{ children }</WrapperBlock>
    )
}

export default Wrapper