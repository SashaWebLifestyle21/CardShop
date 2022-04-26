import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/common-components/Layout/Layout";
import { useTypedSelector } from "./redux/hooks/useTypedSelector";
import { cardSelector } from "./redux/selectors/cardsSelectors/cardsSelectors";
import CardShop from "./containers/CardShop/CardShop";
import { ICards, IError } from "./redux/actions/cardsActionCreator/cardsActionCreator";
import Cart from "./pages/Cart";

export interface IData {
    cards: ICards[],
    isLoading: boolean,
    error: IError
}

function App() {
    const { cards, isLoading, error }: IData = useTypedSelector(cardSelector)
      return (
          <Routes>
              <Route element={<Layout />}>
                  <Route path='/' element={<Navigate replace to='/home' />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/shop' element={<Navigate replace to='/home' />} />
                  <Route path='shop/*'>
                      {cards.map(card => {
                          return <Route key={card.id + card.title} path={card.isbn13} element={<CardShop card={card} />}/>
                      })}
                  </Route>
                  <Route path='/cart' element={<Cart />} />
              </Route>
          </Routes>
      )
}
export default App;
