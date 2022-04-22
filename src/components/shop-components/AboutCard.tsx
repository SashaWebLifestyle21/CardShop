import React from 'react';
import { FlexBox } from "../common-components/FlexBox/FlexBox";
import { Text } from "../common-components/Text/Text";
import { Price } from "../common-components/Price/Price";

interface IAboutCardProps {
    titleCard: string
    priceCard: string
}

const AboutCard = ({ titleCard, priceCard }: IAboutCardProps) => {
    return (
        <FlexBox justifyContent={'space-between'} flexDirection={'column'}>
            <Text weight={600} size={20} marginBottom={16}>{titleCard}</Text>
            <Price>{priceCard}</Price>
            <Text size={14} marginBottom={16}>More information about stickers</Text>
            <Text size={18} marginBottom={16}>Quantity</Text>
        </FlexBox>
    );
};

export default AboutCard;