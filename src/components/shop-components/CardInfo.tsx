import React from 'react';
import { FlexBox } from "../common-components/FlexBox/FlexBox";
import Image from "../common-components/Image/Image";
import AboutCard from "./AboutCard";
import { Box } from "../common-components/Box/Box";

interface ICardInfoProps {
    imgSrc: string
    title: string
    price: string
}

const CardInfo = ({ imgSrc, price, title }: ICardInfoProps) => {
    return (
        <Box width={788} height={288} marginAuto>
            <FlexBox justifyContent={"center"}>
                <Image src={imgSrc} alt={imgSrc} width={288} height={288} />
                <AboutCard titleCard={title} priceCard={price} />
            </FlexBox>
        </Box>
    );
};

export default CardInfo;