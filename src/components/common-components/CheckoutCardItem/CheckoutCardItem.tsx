import React, { useCallback } from 'react';
import { FlexBox } from "../FlexBox/FlexBox";
import Image from "../Image/Image";
import { ICardsBasket } from "../../../redux/actions/basketActionCreator/basketActionCreator";
import { Text } from "../Text/Text";
import Icon from "../Icon/Icon";
import { Box } from "../Box/Box";

interface ICheckoutCardItem {
    card: ICardsBasket
    removeCard: (card: ICardsBasket) => void
}

const CheckoutCardItem = ({ card, removeCard }: ICheckoutCardItem) => {
    const deleteCard = useCallback(() => {
        removeCard(card)
    }, [removeCard, card])
    return (
        <FlexBox width={500} marginAuto columnGap={48} marginBottom={15}>
            <Image width={64} height={64} src={card.image} alt={card.title}/>
            <Text size={14} width={63}>{card.title}</Text>
            <Text width={90}>{card.amount} x ${card.price}</Text>
            <Box onClick={deleteCard}>
                <Icon name={'remove'} />
            </Box>
        </FlexBox>
    );
};

export default React.memo(CheckoutCardItem);