import React from 'react';
import styled, { css } from "styled-components";
import { COLOR } from "../../../constants/color-constants";
import { Box } from '../../common-components/Box/Box';
import { Text } from "../../common-components/Text/Text";

interface ICardHoverTextProps {
    isHovered?: boolean
}

const HoverText = styled(Box)<ICardHoverTextProps>`
  visibility: hidden;
  padding: 10px 23px;
  z-index: 3;
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 5px;
  max-width: 161px;
  width: 100%;
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translateX(-50%);
  
  ${props => props.isHovered && css`
    visibility: visible;
    background-color: ${props => props.theme.colors.primary};
  `}
`

const CardHoverText = ({ isHovered }: ICardHoverTextProps) => {
    return (
        <HoverText isHovered={isHovered}>
            <Text color={COLOR.white} weight={600} size={20}>Add to card</Text>
        </HoverText>
    );
};

export default CardHoverText;