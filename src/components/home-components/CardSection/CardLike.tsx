import React from 'react';
import styled from "styled-components";
import { themes } from '../../../constants/themes';
import Icon from "../../common-components/Icon/Icon";
import {COLOR} from "../../../constants/color-constants";

const CardLikeWrapper =styled.div`
  content: '';
position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  &hover{
    color: ${themes.colors.secondary};
  }
`

const CardLike: React.FC = () => {
    return (
        <CardLikeWrapper>
            <Icon name={'like'}/>
        </CardLikeWrapper>
    );
};

export default CardLike;