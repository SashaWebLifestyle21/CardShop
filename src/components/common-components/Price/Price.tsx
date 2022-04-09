import React from 'react';
import styled from "styled-components";
import { themes } from '../../../constants/themes';

interface IPrice{
    children: string
}

const PriceWrapper = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: ${themes.colors.secondary};
`

const Price = ({children}: IPrice) => {
    return (
        <PriceWrapper>{children}</PriceWrapper>
    );
};

export default Price;