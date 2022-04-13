import React from 'react';
import styled from "styled-components";
import Wrapper from "../../components/common-components/Wrapper/Wrapper";
import { Flex } from "../../components/common-components/FlexBox/FlexBox";
import Logo from "../../components/common-components/Logo/Logo";
import FooterInfo from "../../components/common-components/FooterInfo/FooterInfo";
import { BOX } from '../../components/common-components/Box/Box';

const FooterWrapper = styled(BOX)`
  width: 100%;
  background-color: ${ props => props.theme.colors.footer };
  padding-top: 24px;
  padding-bottom: 24px;
`

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <Wrapper>
                <Flex justifyContent={'space-between'}>
                    <Logo />
                    <FooterInfo />
                </Flex>
            </Wrapper>
        </FooterWrapper>
    )
};

export default Footer;