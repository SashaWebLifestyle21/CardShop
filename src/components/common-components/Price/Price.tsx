import React from 'react';
import styled from "styled-components";
import { themes } from '../../../constants/themes';

interface IPrice{
    children: string
}

const PriceWrapper = styled.p`
  font-weight: ${props => props.theme.fontWeight.semiBold};
  font-size: ${props => props.theme.fontSize.s24};
  color: ${themes.colors.secondary};
`

const Price = ({ children }: IPrice ) => {
    return (
        <PriceWrapper>{children}</PriceWrapper>
    );
};

export default Price;