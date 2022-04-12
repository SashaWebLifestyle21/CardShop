import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/common-components/Layout/Layout";

function App() {
  return (
      <Routes>
          <Route element={ <Layout /> }>
              <Route path='/' element={ <Navigate replace to='/home' /> } />
              <Route path='/home' element={ <Home /> } />
          </Route>
      </Routes>
  )
}
export default App;
