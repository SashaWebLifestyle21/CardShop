import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../../../containers/Footer/Footer";


const Layout: React.FC = () => {
    return (
        <>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;