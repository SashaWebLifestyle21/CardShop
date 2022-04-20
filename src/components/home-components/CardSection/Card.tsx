import React, { useState } from 'react';
import styled from "styled-components";
import CardLike from "./CardLike";
import Image from "../../common-components/Image/Image";
import CardInfo from "./CardInfo";
import CardHoverText from "./CardHoverText";
import { Wrapper } from "../../common-components/Wrapper/Wrapper";

interface ICardProps {
    image: string
    alt?: string
    title: string
    price: string
}

const CardWrapper = styled(Wrapper)`
  position: relative;
  height: 400px;
  cursor: pointer;
  background-color: transparent;
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  &:hover {
    background-color: ${props => props.theme.colors.grey};
    opacity: .8;
    z-index: 2;
  }
  
  &:active {
    background-color: ${props => props.theme.colors.grey};
    opacity: .8;
    z-index: 2;
  }
`

const Card = ({ image, alt, price, title }: ICardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <CardWrapper
            width={310}
            directWidth
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardHoverText isHovered={isHovered}/>
            <Image width={288} height={288} src={image} alt={alt} />
            <CardLike />
            <CardInfo title={title} price={price} />
        </CardWrapper>
    );
};

export default Card;