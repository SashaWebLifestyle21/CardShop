import React from 'react';
import styled from "styled-components";
import { themes } from '../../constants/themes';
import Wrapper from "../../components/common-components/Wrapper/Wrapper";
import FlexBox from "../../components/common-components/FlexBox/FlexBox";
import Logo from "../../components/common-components/Logo/Logo";
import FooterInfo from "../../components/common-components/FooterInfo/FooterInfo";

const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${themes.colors.footer};
  padding-top: 24px;
  padding-bottom: 24px;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <Wrapper>
                <FlexBox alignItems={'centre'} justifyContent={'space-between'}>
                    <Logo />
                    <FooterInfo/>
                </FlexBox>
            </Wrapper>
        </FooterWrapper>
    );
};

export default Footer;