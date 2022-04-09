import React from 'react';
import styled from "styled-components";
import Text from "../../common-components/Text/Text";
import Price from "../../common-components/Price/Price";

interface ICardInfo{
    title: string
    price: string
}

const CardInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;;
`

const CardInfo = ({ title, price}:ICardInfo) => {
    return (
        <CardInfoWrapper>
            <Text weight={'600'} size={'20'}>{title}</Text>
            <Price>{price}</Price>
        </CardInfoWrapper>
    );
};

export default CardInfo;