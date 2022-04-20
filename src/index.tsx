import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { themes } from "./constants/themes";
import { Provider } from "react-redux";
import store from "./redux/store/store";


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
}
`
ReactDOM.render(
    <ThemeProvider theme={themes}>
        <GlobalStyle/>
        <Provider store={store}>
            <React.StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </React.StrictMode>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);
