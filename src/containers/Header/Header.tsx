import React from 'react';
import FlexBox from "../../components/common-components/FlexBox/FlexBox";
import HeaderLogo from "../../components/common-components/Header/HeaderLogo";
import IconsWrapper from "../../components/common-components/IconsWrapper/IconsWrapper";
import {iconsHeader} from "../../constants/iconsHeader";
import Wrapper from "../../components/common-components/Wrapper/Wrapper";
import styled from "styled-components";
import Title from "../../components/common-components/Title/Title";

interface IHeaderWrapperProp {
    img: string
    mb?: string
    title: string
}

interface IHeaderWrapper {
    img: string
    mb?: string
}

const HeaderWrapper = styled.div<IHeaderWrapper>`
    background: url(${p => p.img});
    margin-bottom: ${p => p.mb}px;
`


const Header = ({ img, title, mb}:IHeaderWrapperProp) => {
    return (
        <HeaderWrapper img={img} mb={mb}>
            <Wrapper>
                <FlexBox justifyContent={'space-between'} mb={'70'}>
                    <HeaderLogo />
                    <IconsWrapper icons={iconsHeader} width={'100'} colGap={'20'}/>
                </FlexBox>
                <Title width={'150'} mb={'140'}>{title}</Title>
            </Wrapper>
        </HeaderWrapper>
    );
};

export default Header;