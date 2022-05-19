import React from 'react';
import styled from "styled-components";
import { Box } from '../../common-components/Box/Box';
import Icon from "../../common-components/Icon/Icon";
import { useDispatch } from "react-redux";
import {
    changeCardStatusWishlist,
    ICards
} from "../../../redux/actions/cardsActionCreator/cardsActionCreator";
import { addCardWishlist } from "../../../redux/actions/wishlistActionCreator/wishlistActionCreator";
import { COLOR } from '../../../constants/color-constants';

interface ICardLike {
    card: ICards
}

const CardLikeWrapper = styled(Box)`
  content: '';
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  z-index: 5;
`

const CardLike = ({ card }: ICardLike) => {
    const dispatch = useDispatch()

    const handleAddCardWishlist = () => {
        if(!card.inWishlist){
            dispatch(changeCardStatusWishlist(card.id))
            dispatch(addCardWishlist(card))
        }
    }

    return (
        <CardLikeWrapper width={16} onClick={handleAddCardWishlist}>
            <Icon name={'like'} color={card.inWishlist ? COLOR.secondary : ''} />
        </CardLikeWrapper>
    );
};

export default CardLike;