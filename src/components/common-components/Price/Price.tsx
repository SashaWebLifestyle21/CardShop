import React from 'react';
import styled from "styled-components";

interface IPrice{
    children: React.ReactNode
}

const PriceWrapper = styled.p`
  font-weight: ${props => props.theme.fontWeight.semiBold};
  font-size: 24px;
  color: ${props => props.theme.colors.secondary};
`

const Price = ({ children }: IPrice ) => {
    return (
        <PriceWrapper>{children}</PriceWrapper>
    );
};

export default Price;