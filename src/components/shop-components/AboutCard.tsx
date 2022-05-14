import React, { useState } from 'react';
import { FlexBox } from "../common-components/FlexBox/FlexBox";
import { Text } from "../common-components/Text/Text";
import { Price } from "../common-components/Price/Price";
import CounterCard from "../common-components/CounterCard/CounterCard";
import { ICards } from "../../redux/actions/cardsActionCreator/cardsActionCreator";
import { useDispatch } from "react-redux";
import { addCardBasket } from "../../redux/actions/basketActionCreator/basketActionCreator";
import { COLOR } from "../../constants/color-constants";
import { Button } from "../common-components/Button/Button";

interface IAboutCardProps {
    card: ICards
}

const AboutCard = ({ card }: IAboutCardProps) => {
    const [count, setCount] = useState(1)

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        count > 1 && setCount(count - 1);
    }

    const dispatch = useDispatch()

    const handleAddCardBasket = () => {
        dispatch(addCardBasket(
            {
                ...card,
                amount: count,
                total: count * Number(card.price)
            }
        ))
    }

    return (
        <FlexBox justifyContent={'space-between'} flexDirection={'column'} width={394} alignItems={'baseline'}>
            <Text weight={600} size={20} marginBottom={16}>{card.title}</Text>
            <Price marginBottom={20}>${card.price}</Price>
            <Text size={14} marginBottom={16}>More information about stickers</Text>
            <Text size={18} marginBottom={16} textAlign={'left'}>Quantity</Text>
            {card.stock === 'out of Stock' ?
                <Text>out of Stock</Text>
                :
                <FlexBox justifyContent={'space-between'} width={394}>
                    <CounterCard handleDecrease={decrease} handleIncrease={increase} count={count}/>
                    <Button
                        backgroundColor={COLOR.primary}
                        color={COLOR.white}
                        fontSize={18}
                        hoverBackground={COLOR.lightPrimary}
                        activeBackground={COLOR.lightGrey}
                        onClick={handleAddCardBasket}
                    >
                        Add to cart
                    </Button>
                </FlexBox>
            }

        </FlexBox>
    );
};

export default AboutCard;