import React from 'react';
import { FlexBox } from "../FlexBox/FlexBox";
import { Button } from "../Button/Button";
import { Box } from '../Box/Box';
import { COLOR } from "../../../constants/color-constants";
import { ICardsBasket } from "../../../redux/actions/basketActionCreator/basketActionCreator";

interface ICounterCard {
    basket?: boolean
    handleIncrease?: any
    handleDecrease?: any
    count?: number
    marginAuto?: boolean
    card?: ICardsBasket
}

const checkDecrease = (card: ICardsBasket, handleFunc: any) => {
    card.amount > 1 && handleFunc(card)
}

const CounterCard = ({ handleIncrease, handleDecrease, count, marginAuto, card }: ICounterCard) => {
    return (
        <FlexBox justifyContent={'center'} border={`1px solid ${COLOR.primary}`} height={42} width={128} marginAuto={marginAuto}>
            {
                card
                ? <Button onClick={() => checkDecrease(card, handleDecrease)} color={COLOR.primary}>-</Button>
                : <Button onClick={handleDecrease} color={COLOR.primary}>-</Button>
            }
            <Box
                backgroundColor={COLOR.primary}
                color={COLOR.white}
                paddingBottom={12}
                paddingTop={11}
                paddingLeft={11}
                paddingRight={11}
                height={42}
                mediaWidth={30}
            >
                {count}
            </Box>
            {
                card
                ? <Button onClick={() => handleIncrease(card)} color={COLOR.primary}>+</Button>
                : <Button onClick={handleIncrease} color={COLOR.primary}>+</Button>
            }
        </FlexBox>
    );
};

export default React.memo(CounterCard);