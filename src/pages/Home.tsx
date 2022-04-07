import React from "react";
import Header from "../containers/Header/Header";
import Title from "../components/common-components/Title/Title";




const Home: React.FC = () => {


    return (
        <>
            <Header img={'../Images/headerback.jpg'} title={'Create your own stickers'} mb={'40'}/>
            <Title>Our stickers</Title>
        </>
    )
}

export default Home