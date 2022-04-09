import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Layout from "./components/common-components/Layout/Layout";

function App() {
  return (
    <Provider store={ store }>
      <Routes>
          <Route element={ <Layout/> }>
              <Route path='/' element={ <Navigate replace to='/home' /> } />
              <Route path='/home' element={ <Home /> }/>
          </Route>
      </Routes>
    </Provider>
  );
}

export default App;
