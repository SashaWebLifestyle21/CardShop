import React, { useState } from 'react';
import styled from "styled-components";
import CardLike from "./CardLike";
import Image from "../../common-components/Image/Image";
import CardInfo from "./CardInfo";
import CardHoverText from "./CardHoverText";
import { Wrapper } from "../../common-components/Wrapper/Wrapper";
import { ICards } from "../../../redux/actions/cardsActionCreator/cardsActionCreator";

interface ICardProps {
    card: ICards
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

const Card = ({ card }: ICardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <CardWrapper
            width={310}
            directWidth
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardHoverText isHovered={isHovered} />
            <Image width={288} height={288} src={card.image} alt={card.image} />
            <CardLike card={card} />
            <CardInfo title={card.title} price={card.price} />
        </CardWrapper>
    );
};

export default React.memo(Card);