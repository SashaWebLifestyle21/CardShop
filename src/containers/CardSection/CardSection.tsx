import React from 'react';
import styled from "styled-components";
import Card from '../../components/home-components/CardSection/Card';
import { ICards } from "../../redux/actions/cardsActionCreator/cardsActionCreator";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";

interface ICardSection {
    cards: ICards[]
}

const CardSectionWrapper = styled(FlexBox)`
  column-gap: 64px;
  row-gap: 80px;
  flex-wrap: wrap;
`

const CardSection = ({ cards }: ICardSection) => {
    return (
        <CardSectionWrapper justifyContent={'center'} mb={120}>
            {
                cards.map( card => {
                    return <Card key={card.isbn13+card.price} image={card.image} alt={card.image} title={card.title} price={card.price} />
                })
            }
        </CardSectionWrapper>
    );
};

export default CardSection;