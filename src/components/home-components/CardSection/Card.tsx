import React from 'react';
import styled from "styled-components";
import { themes } from '../../../constants/themes';
import CardLike from "./CardLike";
import Image from "../../common-components/Image/Image";
import CardInfo from "./CardInfo";
import CardHoverText from "./CardHoverText";


interface ICard{
    image: string
    alt?:string
    title:string
    price: string
}

const CardWrapper = styled.div`
position: relative;
  max-width: 310px;
  width: 100%;
  height: 400px;
  cursor: pointer;
  background-color: transparent;
  padding: 10px;
  border: 2px solid ${themes.colors.primary};
  border-radius: 10px;
  &:hover{
    background-color: ${themes.colors.grey};
    opacity: .8;
    z-index: 2;
  }
  &:hover .addCard{
    display: block;
    background-color: ${themes.colors.primary};
    opacity: .8;
  }
  &:active .addCard{
    display: block;
    background-color: ${themes.colors.primary};
    opacity: 1;
  }
  &:active{
    background-color: ${themes.colors.black};
    opacity: .8;
    z-index: 2;
  }
`

const Card = ({image, alt, price, title }: ICard) => {
    return (
        <CardWrapper>
            <CardHoverText/>
            <Image width={288} height={288} src={image} alt={alt}/>
            <CardLike />
            <CardInfo title={title} price={price}/>
        </CardWrapper>
    );
};

export default Card;