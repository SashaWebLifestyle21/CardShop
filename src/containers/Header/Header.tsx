import React from 'react';
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import Logo from "../../components/common-components/Logo/Logo";
import IconsWrapper from "../../components/common-components/IconsWrapper/IconsWrapper";
import { iconsHeader } from "../../constants/iconsHeader";
import styled from "styled-components";
import { Box } from '../../components/common-components/Box/Box';
import { Wrapper } from "../../components/common-components/Wrapper/Wrapper";
import { Title } from "../../components/common-components/Title/Title";
import { Link } from "react-router-dom";

interface IHeaderWrapperProp {
    img: string
    title: string
}

interface IHeaderWrapper {
    img: string
}

const HeaderWrapper = styled(Box)<IHeaderWrapper>`
  background: url( ${p => p.img});
`

const Header = ({ img, title }: IHeaderWrapperProp) => {
    return (
        <HeaderWrapper img={img} marginBottom={40}>
            <Wrapper directWidth>
                <FlexBox justifyContent={'space-between'} mb={70}>
                    <Link to={'/home'}>
                        <Logo />
                    </Link>
                    <IconsWrapper icons={iconsHeader} width={100} colGap={20} />
                </FlexBox>
                <Title width={150} mb={140}>{title}</Title>
            </Wrapper>
        </HeaderWrapper>
    );
};

export default Header;