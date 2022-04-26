import React from 'react';
import Header from "../containers/Header/Header";
import { Wrapper } from "../components/common-components/Wrapper/Wrapper";
import Table from "../components/common-components/Table/Table";
import { useDispatch } from "react-redux";
import { basketSelector } from "../redux/selectors/basketSelector/basketSelector";
import { useTypedSelector } from "../redux/hooks/useTypedSelector";
import { removeCardBasket } from '../redux/actions/basketActionCreator/basketActionCreator';


const Cart = () => {

    const basket = useTypedSelector(basketSelector)
    const dispatch = useDispatch()

    const removeCard = (id: string) => {
        dispatch(removeCardBasket(id))
    }

    return (
        <>
            <Header img={'../Images/cartback.jpg'} title={'Cart'} />
            <Wrapper directWidth >
                <Table bodyItems={basket} removeCard={removeCard}/>
            </Wrapper>
        </>
    );
};

export default Cart;