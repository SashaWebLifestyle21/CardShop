import React, {useState} from 'react';
import styled from "styled-components";
import { TableHeadItem } from './TableHeadItem';
import { ICardsBasket } from "../../../redux/actions/basketActionCreator/basketActionCreator";
import TableBodyItem from './TableBodyItem';
import { tableHeadWishlist } from "../../../constants/tableHeadWishlist";
import { tableHeadBasket } from '../../../constants/tableHeadBasket';

interface ITable {
    bodyItems: ICardsBasket[]
    removeCard: (card: ICardsBasket) => void
    increaseCard: (card: ICardsBasket) => void
    decreaseCard: (card: ICardsBasket) => void
    wishlist?: boolean
}

const TableW = styled.table`
  border: none;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
`


const Table = ({ bodyItems, removeCard, wishlist, increaseCard, decreaseCard }: ITable) => {
    return (
        <TableW>
            <thead>
                <tr>
                    {wishlist ?
                        tableHeadWishlist.map(item => <TableHeadItem key={item.id}>{item.text}</TableHeadItem>)
                        :
                        tableHeadBasket.map(item => <TableHeadItem key={item.id}>{item.text}</TableHeadItem>)
                    }
                </tr>
            </thead>
            <tbody>
                {bodyItems.map(item => {
                    return <TableBodyItem key={item.isbn13 + item.price} card={item} removeCard={removeCard} increaseCard={increaseCard} decreaseCard={decreaseCard} />
                })}
            </tbody>
        </TableW>
    );
};

export default Table;