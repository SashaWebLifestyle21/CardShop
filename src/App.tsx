import React from 'react';
import HeaderLogo from "./components/common-components/Header/HeaderLogo";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import {Provider} from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Provider>
  );
}

export default App;
