import React, {useEffect} from "react";
import Header from "../containers/Header/Header";
import Title from "../components/common-components/Title/Title";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../redux/hooks/useTypedSelector";
import {getCards} from "../redux/actions/cardsActionCreator/cardsActionCreator";




const Home = () => {
    const {cards, isLoading, error} = useTypedSelector(state => state.cards)
    // const state = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCards())
    }, [])
    console.log('state ', cards)


    return (
        <>
            <Header img={'../Images/headerback.jpg'} title={'Create your own stickers'} mb={'40'}/>
            <Title>Our stickers</Title>
            <div>

            </div>
        </>
    )
}

export default Home