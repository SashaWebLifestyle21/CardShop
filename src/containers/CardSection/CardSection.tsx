import React from 'react';
import styled from "styled-components";
import Card from '../../components/home-components/CardSection/Card';
import {ICards} from "../../redux/actions/cardsActionCreator/cardsActionCreator";


interface ICardSection {
    cards: ICards[]
}

const CardSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 64px;
  row-gap: 80px;
  flex-wrap: wrap;
`

const CardSection = ({cards}:ICardSection) => {
    return (
        <CardSectionWrapper>
            {
                cards.map(card => {
                    return <Card key={card.title+card.price} image={card.image} alt={card.image} title={card.title} price={card.price}/>
                })
            }
        </CardSectionWrapper>
    );
};

export default CardSection;