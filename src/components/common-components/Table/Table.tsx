import React from 'react';
import styled from "styled-components";
import { TableHeadItem } from './TableHeadItem';
import {ICardsBasket} from "../../../redux/actions/basketActionCreator/basketActionCreator";
import TableBodyItem from './TableBodyItem';

interface ITable {
    bodyItems: ICardsBasket[]
}

const TableW = styled.table`
  border: none;
  width: 100%;
  border-collapse: collapse;
`

const Table = ({ bodyItems }: ITable) => {
    return (
        <TableW>
            <thead>
                <tr>
                    <TableHeadItem>Product</TableHeadItem>
                    <TableHeadItem>Price</TableHeadItem>
                    <TableHeadItem>Quantity</TableHeadItem>
                    <TableHeadItem>Total</TableHeadItem>
                </tr>
            </thead>
            <tbody>
                {bodyItems.map(item => {
                    return <TableBodyItem key={item.isbn13 + item.price} card={item}/>
                })}
            </tbody>
        </TableW>
    );
};

export default Table;