import React from 'react';
import Header from "../Header/Header";
import { Wrapper } from "../../components/common-components/Wrapper/Wrapper";
import CardInfo from "../../components/shop-components/CardInfo";
import { ICards } from "../../redux/actions/cardsActionCreator/cardsActionCreator";

interface ICardShop {
    cards: ICards
}

const CardShop = ({ cards }: ICardShop) => {
    return (
        <>
            <Header img={'../Images/shopback.jpg'} title={'Shop'} />
            <Wrapper>
                <CardInfo imgSrc={cards.image} title={cards.title} price={cards.price} />
            </Wrapper>
        </>
    );
};

export default CardShop;