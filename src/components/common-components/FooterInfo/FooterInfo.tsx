import React from 'react';
import styled from "styled-components";
import Text from "../Text/Text";
import IconsWrapper from "../IconsWrapper/IconsWrapper";
import { iconsFooter } from "../../../constants/iconsFooter";

const FooterInfoWrapper = styled.div``

const FooterInfo = () => {
    return (
        <FooterInfoWrapper>
            <Text size={ 14 } weight={ 600 } talign={ 'end' }>Follow us</Text>
            <IconsWrapper icons={ iconsFooter }/>
        </FooterInfoWrapper>
    );
};

export default FooterInfo;