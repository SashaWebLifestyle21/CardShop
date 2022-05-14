import React, {useState} from 'react';
import { FlexBox } from "../FlexBox/FlexBox";
import { Button } from "../Button/Button";
import { Box } from '../Box/Box';
import { COLOR } from "../../../constants/color-constants";
import { ICards } from "../../../redux/actions/cardsActionCreator/cardsActionCreator";
import { useDispatch } from "react-redux";
import { addCardBasket } from "../../../redux/actions/basketActionCreator/basketActionCreator";

interface ICounterCard {
    card: ICards
}

const CounterCard = ({ card }: ICounterCard) => {
    return (
        <FlexBox justifyContent={'space-between'} width={394}>
            <FlexBox justifyContent={'center'} border={`1px solid ${COLOR.primary}`} height={42}>
                <Button onClick={handleMinusCount} color={COLOR.primary}>-</Button>
                <Box
                    backgroundColor={COLOR.primary}
                    color={COLOR.white}
                    paddingBottom={12}
                    paddingTop={11}
                    paddingLeft={11}
                    paddingRight={11}
                    height={42}
                >
                    {count}
                </Box>
                <Button onClick={handlePlusCount} color={COLOR.primary}>+</Button>
            </FlexBox>
        </FlexBox>
    );
};

export default CounterCard;