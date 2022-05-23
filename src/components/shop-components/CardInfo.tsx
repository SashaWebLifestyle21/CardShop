import React from 'react';
import { FlexBox } from "../common-components/FlexBox/FlexBox";
import Image from "../common-components/Image/Image";
import AboutCard from "./AboutCard";
import { Box } from "../common-components/Box/Box";
import { ICards } from "../../redux/actions/cardsActionCreator/cardsActionCreator";

interface ICardInfoProps {
    card: ICards
}

const CardInfo = ({ card }: ICardInfoProps) => {
    return (
        <Box width={788} marginAuto paddingLeft={16} paddingRight={16}>
            <FlexBox justifyContent={"center"}>
                <Image src={card.image} alt={card.title} width={288} height={288} />
                <AboutCard card={card} />
            </FlexBox>
        </Box>
    );
};

export default React.memo(CardInfo);