import React, { useEffect } from "react";
import Header from "../containers/Header/Header";
import { Title } from "../components/common-components/Title/Title";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../redux/hooks/useTypedSelector";
import { addAsyncCard } from "../redux/actions/cardsActionCreator/cardsActionCreator";
import CardSection from "../containers/CardSection/CardSection";
import Loader from "../components/common-components/Loader/Loader";
import { Wrapper } from "../components/common-components/Wrapper/Wrapper";
import { cardSelector } from "../redux/selectors/cardsSelectors/cardsSelectors";

const Home: React.FC = () => {
    const { cards, isLoading, error } = useTypedSelector(cardSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addAsyncCard())
    },[])
    return (
        <>
            <Header img={'../Images/headerback.jpg'} title={'Create your own books'} />
            <Wrapper directWidth>
                <Title mb={40}>Our Books</Title>
                {error && <Title>{error}</Title>}
                {isLoading ? <Loader /> : <CardSection cards={cards} />}
            </Wrapper>
        </>
    )
}

export default Home