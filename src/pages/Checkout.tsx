import React from 'react';
import Header from "../containers/Header/Header";
import { FlexBox } from "../components/common-components/FlexBox/FlexBox";
import { Wrapper } from "../components/common-components/Wrapper/Wrapper";
import { COLOR } from '../constants/color-constants';
import { Text } from "../components/common-components/Text/Text";
import { useTypedSelector } from "../redux/hooks/useTypedSelector";
import { basketSelector } from "../redux/selectors/basketSelector/basketSelector";
import CheckoutCardItem from "../components/common-components/CheckoutCardItem/CheckoutCardItem";
import { Price } from '../components/common-components/Price/Price';
import { themes } from "../constants/themes";
import { useDispatch } from "react-redux";
import { ICardsBasket, removeCardBasket } from "../redux/actions/basketActionCreator/basketActionCreator";
import { changeCardStatusBasket } from "../redux/actions/cardsActionCreator/cardsActionCreator";
import { changeStatusInBasket } from "../redux/actions/wishlistActionCreator/wishlistActionCreator";
import FormCheckout from "../containers/FormCheckout/FormCheckout";

const Checkout = () => {
    const basket = useTypedSelector(basketSelector)
    const dispatch = useDispatch()

    const removeCard = (card: ICardsBasket) => {
        dispatch(removeCardBasket(card))
        dispatch(changeCardStatusBasket(card.id))
        dispatch(changeStatusInBasket(card.id))
    }
    return (
        <>
            <Header img={'../Images/checkoutback.jpg'} title={'Checkout'}/>
            <FlexBox>
                <Wrapper>
                    <FormCheckout />
                </Wrapper>
                <Wrapper backgroundColor={COLOR.footer}>
                    <Text size={24} textAlign={'center'}>Your order</Text>
                    {basket.cards.map(card => <CheckoutCardItem key={card.isbn13 + card.isbn13} card={card} removeCard={removeCard} />)}
                    <FlexBox justifyContent={'center'} columnGap={20}>
                        <Text weight={themes.fontWeight.bold} size={24}>Total</Text>
                        <Price>${basket.totalPrice.toFixed(2)}</Price>
                    </FlexBox>
                </Wrapper>
            </FlexBox>
        </>
    );
};

export default Checkout;