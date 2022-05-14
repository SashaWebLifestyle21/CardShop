import React from "react";
import styled from "styled-components";
import { ICardsBasket } from "../../../redux/actions/basketActionCreator/basketActionCreator";
import Image from "../Image/Image";
import { FlexBox } from "../FlexBox/FlexBox";
import Icon from "../Icon/Icon";
import CounterCard from "../CounterCard/CounterCard";
import { Button } from "../Button/Button";
import { COLOR } from "../../../constants/color-constants";

interface ITableBodyItemCol {
    card: ICardsBasket
    removeCard: (card: ICardsBasket) => void
    increaseCard: (card: ICardsBasket) => void
    decreaseCard: (card: ICardsBasket) => void
    wishlist?: boolean
}

export const TableBodyItemRow = styled.tr`
`

export const TableBodyItemCol = styled.td`
  border-top: 1px solid ${props => props.theme.colors.lightGrey};
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
  padding: 5px;
  text-align: center;
  border-spacing: 0;
`

const TableBodyItem = ({ card, removeCard, wishlist, increaseCard, decreaseCard }: ITableBodyItemCol) => {
    return (
        <TableBodyItemRow>
            <TableBodyItemCol>
                <FlexBox justifyContent={'center'}>
                    <Image src={card.image} alt={card.title} height={64} width={64}/>
                    {card.title}
                </FlexBox>
            </TableBodyItemCol>
            <TableBodyItemCol>{card.price}</TableBodyItemCol>
            <TableBodyItemCol>
                {wishlist ?
                card.stock
                :
                <CounterCard count={card.amount} handleIncrease={increaseCard} handleDecrease={decreaseCard} card={card} marginAuto />
                }
            </TableBodyItemCol>
            <TableBodyItemCol>
                {wishlist ?
                    (card.stock === 'in Stock' ?
                    <Button backgroundColor={COLOR.primary} marginAuto>Add cart</Button>
                    :
                    <Button disabled>Add cart</Button>)
                    :
                    '$'+(card.total).toFixed(2)
                }
            </TableBodyItemCol>
            <TableBodyItemCol onClick={() => removeCard(card)}>
                <Icon name={'remove'} />
            </TableBodyItemCol>
        </TableBodyItemRow>
    );
};

export default TableBodyItem;