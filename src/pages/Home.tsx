import React, {useEffect} from "react";
import Header from "../containers/Header/Header";
import Title from "../components/common-components/Title/Title";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../redux/hooks/useTypedSelector";
import {getCards, ICards} from "../redux/actions/cardsActionCreator/cardsActionCreator";
import CardSection from "../containers/CardSection/CardSection";
import Wrapper from "../components/common-components/Wrapper/Wrapper";
import Loader from "../components/common-components/Loader/Loader";




const Home = () => {
    const {cards, isLoading, error} = useTypedSelector(state => state.cards)
    // const state = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCards())
    }, [])
    console.log('state ', cards)

    const isCardsExist = cards && (cards as ICards[]).length > 0;

    return (
        <>
            <Header img={'../Images/headerback.jpg'} title={'Create your own books'} mb={'40'}/>

            <Wrapper>
                <Title mb={'40'}>Our Books</Title>
                {isCardsExist ? <CardSection cards={cards} /> : <Loader/>}

            </Wrapper>

        </>
    )
}

export default Home