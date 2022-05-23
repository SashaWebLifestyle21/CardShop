import React from 'react';
import { FlexBox } from "../../common-components/FlexBox/FlexBox";
import { Price } from "../../common-components/Price/Price";
import { Text } from "../../common-components/Text/Text";

interface ICardInfo {
    title: string
    price: string
}

const CardInfo = ({ title, price}: ICardInfo) => {
    return (
        <FlexBox justifyContent={'space-between'} padding={5}>
            <Text weight={600} size={20}>{title}</Text>
            <Price>${price}</Price>
        </FlexBox>
    );
};

export default CardInfo;