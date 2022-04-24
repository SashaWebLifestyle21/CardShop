import React from 'react';
import Header from "../Header/Header";
import { Wrapper } from "../../components/common-components/Wrapper/Wrapper";
import CardInfo from "../../components/shop-components/CardInfo";
import { ICards } from "../../redux/actions/cardsActionCreator/cardsActionCreator";

interface ICardShop {
    card: ICards
}

const CardShop = ({ card }: ICardShop) => {
    return (
        <>
            <Header img={'../Images/shopback.jpg'} title={'Shop'} />
            <Wrapper>
                <CardInfo card={card} />
            </Wrapper>
        </>
    );
};

export default CardShop;