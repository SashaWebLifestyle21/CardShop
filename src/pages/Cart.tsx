import React from 'react';
import Header from "../containers/Header/Header";
import {Wrapper} from "../components/common-components/Wrapper/Wrapper";
import Table from "../components/common-components/Table/Table";
import { useSelector } from "react-redux";
import { basketSelector } from "../redux/selectors/basketSelector/basketSelector";
import {useTypedSelector} from "../redux/hooks/useTypedSelector";


const Cart = () => {

    const basket = useTypedSelector(basketSelector)
    console.log(basket)
    return (
        <>
            <Header img={'../Images/cartback.jpg'} title={'Cart'} />
            <Wrapper directWidth >
                <Table bodyItems={basket} />
            </Wrapper>
        </>
    );
};

export default Cart;