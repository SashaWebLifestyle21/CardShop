import React from 'react';
import { Wrapper } from "../components/common-components/Wrapper/Wrapper";
import Header from "../containers/Header/Header";
import { useTypedSelector } from "../redux/hooks/useTypedSelector";
import { wishlistSelector } from "../redux/selectors/wishlistSelector/wishlistSelector";
import { removeCardWishlist } from "../redux/actions/wishlistActionCreator/wishlistActionCreator";
import { useDispatch } from "react-redux";
import TableWishlist from "../containers/TableWishlist/TableWishlist";
import { Title } from '../components/common-components/Title/Title';
import { Link } from "react-router-dom";
import { Button } from "../components/common-components/Button/Button";
import { COLOR } from "../constants/color-constants";
import { FlexBox } from "../components/common-components/FlexBox/FlexBox";
import { changeCardStatusWishlist } from "../redux/actions/cardsActionCreator/cardsActionCreator";

const Wishlist = () => {
    const wishlist = useTypedSelector(wishlistSelector)
    const dispatch = useDispatch()

    const removeCard = (id: string) => {
        dispatch(removeCardWishlist(id))
        dispatch(changeCardStatusWishlist(id))
    }

    return (
        <>
            <Header img={'../Images/wishlistback.jpg'} title={'Wishlist'} />
            <Wrapper directWidth padding={40}>
                {wishlist.length === 0
                ?   <>
                        <Title>Нет понравившихся карточек</Title>
                        <FlexBox>
                            <Link to={'/home'}>
                                <Button
                                    color={COLOR.primary}
                                    fontSize={18}
                                    borderColor={COLOR.primary}
                                    marginTop={64}
                                    marginBottom={64}
                                >
                                    Start shopping
                                </Button>
                            </Link>
                        </FlexBox>
                    </>
                : <TableWishlist cards={wishlist} removeCard={removeCard} />}

            </Wrapper>
        </>
    );
};

export default Wishlist;