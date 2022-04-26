import React from "react";
import styled from "styled-components";
import {ICardsBasket} from "../../../redux/actions/basketActionCreator/basketActionCreator";
import Image from "../Image/Image";
import CounterCard from "../CounterCard/CounterCard";
import {FlexBox} from "../FlexBox/FlexBox";
import Icon from "../Icon/Icon";

interface ITableBodyItemCol {
    card: ICardsBasket
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

const TableBodyItem = ({ card }: ITableBodyItemCol) => {
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
                {card.amount}
            </TableBodyItemCol>
            <TableBodyItemCol>{card.total}</TableBodyItemCol>
            <TableBodyItemCol>
                <Icon name={'remove'} />
            </TableBodyItemCol>
        </TableBodyItemRow>
    );
};

export default TableBodyItem;