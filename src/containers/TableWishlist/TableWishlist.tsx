import React, { useCallback } from 'react';
import { Table, TableRow, TBody, THead } from "../../components/common-components/Table/Table";
import { tableHeadWishlist } from "../../constants/tableHeadWishlist";
import { TableHeadItem } from "../../components/common-components/Table/TableHeadItem";
import { changeCardStatusBasket, ICards } from "../../redux/actions/cardsActionCreator/cardsActionCreator";
import { addCardBasket } from "../../redux/actions/basketActionCreator/basketActionCreator";
import { TableBodyItemCol } from "../../components/common-components/Table/TableBodyItem";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import Image from "../../components/common-components/Image/Image";
import { Button } from '../../components/common-components/Button/Button';
import { useDispatch } from "react-redux";
import Icon from "../../components/common-components/Icon/Icon";
import { COLOR } from "../../constants/color-constants";
import { changeStatusInBasket } from "../../redux/actions/wishlistActionCreator/wishlistActionCreator";

interface ITableWishlist {
    cards: ICards[]
    removeCard: (id: string) => void
}

const TableWishlist = ({ cards, removeCard }: ITableWishlist) => {

    const dispatch = useDispatch()

    const handleAddCardBasket = useCallback((card: ICards) => {
        if(!card.inBasket){
            dispatch(changeCardStatusBasket(card.id))
            dispatch(changeStatusInBasket(card.id))
            dispatch(addCardBasket(
                {
                    ...card,
                    amount: 1,
                    total: Number(card.price)
                }
            ))
        }
    },[dispatch])

    return (
        <Table>
            <THead>
                <TableRow>
                    {tableHeadWishlist.map(item => <TableHeadItem key={item.id}>{item.text}</TableHeadItem>)}
                </TableRow>
            </THead>
            <TBody>
                {cards.map(card => {
                    return (<TableRow key={card.isbn13 + card.stock}>
                        <TableBodyItemCol>
                            <FlexBox justifyContent={'center'}>
                                <Image src={card.image} alt={card.title} height={64} width={64}/>
                                {card.title}
                            </FlexBox>
                        </TableBodyItemCol>
                        <TableBodyItemCol>${card.price}</TableBodyItemCol>
                        <TableBodyItemCol>{card.stock}</TableBodyItemCol>
                        <TableBodyItemCol>
                            <Button
                                disabled={card.stock === 'out of Stock' || card.inBasket}
                                backgroundColor={COLOR.primary}
                                color={COLOR.white}
                                fontSize={18}
                                hoverBackground={COLOR.lightPrimary}
                                activeBackground={COLOR.lightGrey}
                                onClick={() => handleAddCardBasket(card)}
                            >
                                Add to card
                            </Button>
                        </TableBodyItemCol>
                        <TableBodyItemCol onClick={() => removeCard(card.id)}>
                            <Icon name={'remove'} />
                        </TableBodyItemCol>
                    </TableRow>)
                })}
            </TBody>
        </Table>
    );
};

export default React.memo(TableWishlist);