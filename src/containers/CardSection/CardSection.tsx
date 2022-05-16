import React from 'react';
import styled from "styled-components";
import Card from '../../components/home-components/CardSection/Card';
import { ICards } from "../../redux/actions/cardsActionCreator/cardsActionCreator";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { Link } from "react-router-dom";

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
                    return <Link key={card.id + card.isbn13} to={`/shop/${card.isbn13}`}>
                        <Card key={card.isbn13+card.price} card={card} />
                    </Link>
                })
            }
        </CardSectionWrapper>
    );
};

export default CardSection;