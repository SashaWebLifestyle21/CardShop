import React from 'react';
import styled from "styled-components";
import Wrapper from "../../components/common-components/Wrapper/Wrapper";
import FlexBox from "../../components/common-components/FlexBox/FlexBox";
import Logo from "../../components/common-components/Logo/Logo";
import FooterInfo from "../../components/common-components/FooterInfo/FooterInfo";

const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${ props => props.theme.colors.footer };
  padding-top: 24px;
  padding-bottom: 24px;
`

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <Wrapper>
                <FlexBox justifyContent={'space-between'}>
                    <Logo />
                    <FooterInfo />
                </FlexBox>
            </Wrapper>
        </FooterWrapper>
    )
};

export default Footer;