import React, {useState} from 'react';
import Header from "../containers/Header/Header";
import { Wrapper } from "../components/common-components/Wrapper/Wrapper";
import Table from "../components/common-components/Table/Table";
import { useDispatch } from "react-redux";
import { basketSelector } from "../redux/selectors/basketSelector/basketSelector";
import { useTypedSelector } from "../redux/hooks/useTypedSelector";
import { Title } from "../components/common-components/Title/Title";
import { Button } from "../components/common-components/Button/Button";
import { COLOR } from "../constants/color-constants";
import { Link } from "react-router-dom";
import { FlexBox } from "../components/common-components/FlexBox/FlexBox";
import { Text } from "../components/common-components/Text/Text";
import { themes } from "../constants/themes";
import { Price } from "../components/common-components/Price/Price";
import {
    ICardsBasket,
    increaseCardAmount,
    decreaseCardAmount,
    removeCardBasket
} from '../redux/actions/basketActionCreator/basketActionCreator';

const Cart = () => {

    const basket = useTypedSelector(basketSelector)
    const dispatch = useDispatch()

    const removeCard = (card: ICardsBasket) => {
        dispatch(removeCardBasket(card))
    }

    const increaseCard = (card: ICardsBasket) => {
        dispatch(increaseCardAmount(card))
    }

    const decreaseCard = (card: ICardsBasket) => {
        dispatch(decreaseCardAmount(card))
    }

    return (
        <>
            <Header img={'../Images/cartback.jpg'} title={'Cart'} />
            <Wrapper directWidth >
                {basket.cards.length === 0
                    ? <Title>Корзина пустая</Title>
                    : <Table bodyItems={basket.cards} removeCard={removeCard} increaseCard={increaseCard} decreaseCard={decreaseCard} />
                }
                <FlexBox justifyContent={'end'}>
                        <Link to={'/home'}>
                            <Button
                                color={COLOR.primary}
                                fontSize={18}
                                borderColor={COLOR.primary}
                                marginBottom={64}
                            >
                                Continue shopping
                            </Button>
                        </Link>
                </FlexBox>
                <FlexBox justifyContent={'end'}>
                    <FlexBox justifyContent={'space-between'} width={150}>
                        <Text weight={themes.fontWeight.bold} size={24}>Total</Text>
                        <Price>${basket.totalPrice.toFixed(2)}</Price>
                    </FlexBox>
                </FlexBox>
            </Wrapper>
        </>
    );
};

export default Cart;