import React, { useCallback } from 'react';
import Header from "../containers/Header/Header";
import { Wrapper } from "../components/common-components/Wrapper/Wrapper";
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
import TableBasket from "../containers/TableBasket/TableBasket";
import { changeCardStatusBasket } from "../redux/actions/cardsActionCreator/cardsActionCreator";
import { changeStatusInBasket } from "../redux/actions/wishlistActionCreator/wishlistActionCreator";

const Cart = () => {
    const basket = useTypedSelector(basketSelector)
    const dispatch = useDispatch()

    const removeCard = useCallback((card: ICardsBasket) => {
        dispatch(removeCardBasket(card))
        dispatch(changeCardStatusBasket(card.id))
        dispatch(changeStatusInBasket(card.id))
    },[dispatch])

    const increaseCard = useCallback((card: ICardsBasket) => {
        dispatch(increaseCardAmount(card))
    }, [dispatch])

    const decreaseCard = useCallback((card: ICardsBasket) => {
        dispatch(decreaseCardAmount(card))
    },[dispatch])

    return (
        <>
            <Header img={'../Images/cartback.jpg'} title={'Cart'} />
            <Wrapper directWidth>
                {basket.cards.length === 0
                    ? <Title>Корзина пустая</Title>
                    : <TableBasket cards={basket.cards} removeCard={removeCard} increaseCard={increaseCard} decreaseCard={decreaseCard} />
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
                <FlexBox justifyContent={'end'} marginBottom={40}>
                    <FlexBox justifyContent={'space-between'} width={150}>
                        <Text weight={themes.fontWeight.bold} size={24}>Total</Text>
                        <Price>${basket.totalPrice.toFixed(2)}</Price>
                    </FlexBox>
                </FlexBox>
                <FlexBox justifyContent={'end'}>
                    <Link to={'/checkout'}>
                        <Button
                            color={COLOR.white}
                            backgroundColor={COLOR.primary}
                            fontSize={18}
                            borderColor={COLOR.primary}
                            marginBottom={64}
                            disabled={basket.cards.length === 0}
                        >
                            Proceed to checkout
                        </Button>
                    </Link>
                </FlexBox>
            </Wrapper>
        </>
    );
};

export default Cart;