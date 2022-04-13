import React from 'react';
import { Flex } from "../../components/common-components/FlexBox/FlexBox";
import Logo from "../../components/common-components/Logo/Logo";
import IconsWrapper from "../../components/common-components/IconsWrapper/IconsWrapper";
import { iconsHeader } from "../../constants/iconsHeader";
import Wrapper from "../../components/common-components/Wrapper/Wrapper";
import styled from "styled-components";
import Title from "../../components/common-components/Title/Title";
import { BOX } from '../../components/common-components/Box/Box';

interface IHeaderWrapperProp {
    img: string
    mb?: number
    title: string
}

interface IHeaderWrapper {
    img: string
    mb?: number
}

const HeaderWrapper = styled(BOX)<IHeaderWrapper>`
    background: url( ${ p => p.img });
    margin-bottom: ${ p => p.mb }px;
`


const Header = ({ img, title, mb }: IHeaderWrapperProp) => {
    return (
        <HeaderWrapper img={img} mb={mb}>
            <Wrapper>
                <Flex justifyContent={'space-between'} mb={70}>
                    <Logo />
                    <IconsWrapper icons={iconsHeader} width={100} colGap={20} />
                </Flex>
                <Title width={150} mb={140}>{title}</Title>
            </Wrapper>
        </HeaderWrapper>
    );
};

export default Header;