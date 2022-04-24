import React from 'react';
import { FlexBox } from "../common-components/FlexBox/FlexBox";
import { Text } from "../common-components/Text/Text";
import { Price } from "../common-components/Price/Price";
import CounterCard from "../common-components/CounterCard/CounterCard";
import { ICards } from "../../redux/actions/cardsActionCreator/cardsActionCreator";

interface IAboutCardProps {
    card: ICards
}

const AboutCard = ({ card }: IAboutCardProps) => {
    return (
        <FlexBox justifyContent={'space-between'} flexDirection={'column'} width={394} alignItems={'baseline'}>
            <Text weight={600} size={20} marginBottom={16}>{card.title}</Text>
            <Price marginBottom={20}>{card.price}</Price>
            <Text size={14} marginBottom={16}>More information about stickers</Text>
            <Text size={18} marginBottom={16} textAlign={'left'}>Quantity</Text>
            <CounterCard card={card}/>
        </FlexBox>
    );
};

export default AboutCard;