import React, { useEffect } from "react";
import Header from "../containers/Header/Header";
import Title from "../components/common-components/Title/Title";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../redux/hooks/useTypedSelector";
import { getCards, ICards } from "../redux/actions/cardsActionCreator/cardsActionCreator";
import CardSection from "../containers/CardSection/CardSection";
import Wrapper from "../components/common-components/Wrapper/Wrapper";
import Loader from "../components/common-components/Loader/Loader";

const Home: React.FC = () => {
    const { cards, isLoading, error } = useTypedSelector(state => state.cards)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCards())
    }, [])

    return (
        <>
            <Header img={'../Images/headerback.jpg'} title={'Create your own books'} mb={40} />
            <Wrapper>
                <Title mb={40}>Our Books</Title>
                {error && <Title>{error}</Title>}
                {isLoading ? <Loader/> : <CardSection cards={cards} />}
            </Wrapper>
        </>
    )
}

export default Home