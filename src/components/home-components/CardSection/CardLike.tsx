import React from 'react';
import styled from "styled-components";
import Icon from "../../common-components/Icon/Icon";

const CardLikeWrapper = styled.div`
  content: '';
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  &hover{
    color: ${props => props.theme.colors.secondary};
  }
`

const CardLike: React.FC = () => {
    return (
        <CardLikeWrapper>
            <Icon name={'like'} />
        </CardLikeWrapper>
    );
};

export default CardLike;