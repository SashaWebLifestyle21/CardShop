import React, {useState} from 'react';
import { FlexBox } from "../FlexBox/FlexBox";
import { Button } from "../Button/Button";
import { Box } from '../Box/Box';
import {COLOR} from "../../../constants/color-constants";



const CounterCard = () => {
    const [count, setCount] = useState(0)

    const handlePlusCount = () => {
        setCount(count + 1)
    }

    const handleMinusCount = () => {
        (count === 0) ? setCount(0) : setCount(count - 1)
    }

    return (
        <FlexBox justifyContent={'center'} border={`1px solid ${COLOR.primary}`}>
            <Button onClick={handleMinusCount} color={COLOR.primary}>-</Button>
            <Box
                backgroundColor={COLOR.primary}
                color={COLOR.white}
                paddingBottom={11}
                paddingTop={11}
                paddingLeft={11}
                paddingRight={11}
            >
                {count}
            </Box>
            <Button onClick={handlePlusCount} color={COLOR.primary}>+</Button>
        </FlexBox>
    );
};

export default CounterCard;