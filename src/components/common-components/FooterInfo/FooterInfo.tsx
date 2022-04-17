import React from 'react';
import IconsWrapper from "../IconsWrapper/IconsWrapper";
import { iconsFooter } from "../../../constants/iconsFooter";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

const FooterInfo: React.FC = () => {
    return (
        <Box width={190}>
            <Text size={14} weight={600} textAlign={'end'}>Follow us</Text>
            <IconsWrapper icons={iconsFooter} />
        </Box>
    );
};

export default FooterInfo;