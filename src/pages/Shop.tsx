import React from 'react';
import { IData } from '../App';
import Header from "../containers/Header/Header";
import { useTypedSelector } from "../redux/hooks/useTypedSelector";
import { cardSelector } from "../redux/selectors/cardsSelectors/cardsSelectors";
import { Route, Routes } from "react-router-dom";
import CardShop from "../containers/CardShop/CardShop";

const Shop = () => {
    const { cards, isLoading, error }: IData = useTypedSelector(cardSelector)
    return (
        <>
            <Header img={'../Images/shopback.jpg'} title={'Shop'} />
            <Routes>
                {cards.map(card => {
                    return <Route key={card.id} path={card.isbn13} element={<CardShop cards={card}/>}/>
                })}
            </Routes>
        </>
    );
};

export default Shop;