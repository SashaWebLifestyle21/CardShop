import React, {ReactElement} from 'react';
import styled from "styled-components";
import CardLike from "./CardLike";
import Image from "../../common-components/Image/Image";
import CardInfo from "./CardInfo";
import CardHoverText from "./CardHoverText";
import { Wrapper } from "../../common-components/Wrapper/Wrapper";

interface ICardProps{
    image: string
    alt?:string
    title:string
    price: string
    hoverElement?: any
}

const CardWrapper = styled(Wrapper)`
  position: relative;
  height: 400px;
  cursor: pointer;
  background-color: transparent;
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  &:hover{
    background-color: ${props => props.theme.colors.grey};
    opacity: .8;
    z-index: 2;
  }
  &:hover .addCard {
      display: block;
      background-color: ${props => props.theme.colors.primary};
      opacity: .8;
  }
  &:active .addCard{
      display: block;
      background-color: ${props => props.theme.colors.primary};
      opacity: 1;
  }
  &:active{
    background-color: ${props => props.theme.colors.black};
    opacity: .8;
    z-index: 2;
  }
`

const Card = ({ image, alt, price, title }: ICardProps) => {
    return (
        <CardWrapper width={310} directWidth>
            <CardHoverText />
            <Image width={288} height={288} src={image} alt={alt} />
            <CardLike />
            <CardInfo title={title} price={price} />
        </CardWrapper>
    );
};

export default Card;