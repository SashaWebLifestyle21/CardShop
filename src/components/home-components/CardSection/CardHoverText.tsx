import React from 'react';
import styled from "styled-components";
import { themes } from "../../../constants/themes";
import { COLOR } from "../../../constants/color-constants";
import Text from "../../common-components/Text/Text";

const HoverText = styled.div`
  display: none;
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
`
const CardHoverText: React.FC = () => {
    return (
        <HoverText className='addCard'>
            <Text color={ COLOR.white } weight={ 600 } size={ 20 }>Add to card</Text>
        </HoverText>
    );
};

export default CardHoverText;