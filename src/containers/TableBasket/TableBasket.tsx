import React from 'react';
import { Table, TableRow, TBody, THead } from "../../components/common-components/Table/Table";
import { tableHeadBasket } from "../../constants/tableHeadBasket";
import { TableHeadItem } from "../../components/common-components/Table/TableHeadItem";
import { ICardsBasket } from "../../redux/actions/basketActionCreator/basketActionCreator";
import { TableBodyItemCol } from "../../components/common-components/Table/TableBodyItem";
import { FlexBox } from '../../components/common-components/FlexBox/FlexBox';
import Image from "../../components/common-components/Image/Image";
import CounterCard from '../../components/common-components/CounterCard/CounterCard';
import Icon from '../../components/common-components/Icon/Icon';

interface ITableBasket {
    cards: ICardsBasket[]
    removeCard: (card: ICardsBasket) => void
    increaseCard: (card: ICardsBasket) => void
    decreaseCard: (card: ICardsBasket) => void
}

const TableBasket = ({ cards, increaseCard, decreaseCard, removeCard }: ITableBasket) => {
    return (
        <Table>
            <THead>
                <TableRow>
                    {tableHeadBasket.map(item => <TableHeadItem key={item.id}>{item.text}</TableHeadItem>)}
                </TableRow>
            </THead>
            <TBody>
                {cards.map(card => {
                   return (<TableRow key={card.id + card.price}>
                        <TableBodyItemCol>
                            <FlexBox justifyContent={'center'}>
                                <Image src={card.image} alt={card.title} height={64} width={64}/>
                                {card.title}
                            </FlexBox>
                        </TableBodyItemCol>
                       <TableBodyItemCol>${card.price}</TableBodyItemCol>
                       <TableBodyItemCol>
                           <CounterCard
                               count={card.amount}
                               handleIncrease={increaseCard}
                               handleDecrease={decreaseCard}
                               card={card}
                               marginAuto
                           />
                       </TableBodyItemCol>
                       <TableBodyItemCol onClick={() => removeCard(card)}>
                           <Icon name={'remove'} />
                       </TableBodyItemCol>
                    </TableRow>)
                })}
            </TBody>
        </Table>
    );
};

export default React.memo(TableBasket);