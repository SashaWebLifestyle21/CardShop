import React from 'react';
import Text from "../../common-components/Text/Text";
import Price from "../../common-components/Price/Price";
import { Flex } from "../../common-components/FlexBox/FlexBox";
import styled from "styled-components";

interface ICardInfo{
    title: string
    price: string
}

const CardInfoWrapper = styled(Flex)`
padding: 5px;
`

const CardInfo = ({ title, price}: ICardInfo) => {
    return (
        <CardInfoWrapper justifyContent={'space-between'}>
            <Text weight={600} size={20}>{title}</Text>
            <Price>{ price }</Price>
        </CardInfoWrapper>
    );
};

export default CardInfo;