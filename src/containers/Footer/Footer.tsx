import React from 'react';
import { Flex } from "../../components/common-components/FlexBox/FlexBox";
import Logo from "../../components/common-components/Logo/Logo";
import FooterInfo from "../../components/common-components/FooterInfo/FooterInfo";
import { Wrapper } from "../../components/common-components/Wrapper/Wrapper";
import {COLOR} from "../../constants/color-constants";

const Footer: React.FC = () => {
    return (
        <Wrapper backgroundColor={COLOR.footer} padding={24}>
            <Wrapper directWidth>
                <Flex justifyContent={'space-between'}>
                    <Logo />
                    <FooterInfo />
                </Flex>
            </Wrapper>
        </Wrapper>
    )
};

export default Footer;