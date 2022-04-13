import React from 'react';
import Text from "../Text/Text";
import IconsWrapper from "../IconsWrapper/IconsWrapper";
import { iconsFooter } from "../../../constants/iconsFooter";
import {BOX} from "../Box/Box";

const FooterInfo: React.FC = () => {
    return (
        <BOX>
            <Text size={14} weight={600} talign={'end'}>Follow us</Text>
            <IconsWrapper icons={iconsFooter} />
        </BOX>
    );
};

export default FooterInfo;