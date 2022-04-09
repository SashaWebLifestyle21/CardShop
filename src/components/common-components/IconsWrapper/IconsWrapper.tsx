import React from 'react';
import styled from "styled-components";
import Icon from "../Icon/Icon";

interface IIconsWrapper{
    icons: Array<any>
    width?: number,
    colGap?: number
}

interface IIconsWrap{
    width?: number,
    colGap?: number
}

const IconsWrap = styled.div<IIconsWrap>`
  display: flex;
  align-items: center;
  width: ${ p => p.width }px;
  column-gap: ${ p => p.colGap || 20 }px;
`

const IconsWrapper = ( { icons, width, colGap }: IIconsWrapper) => {
    return (
        <IconsWrap width={ width } colGap={ colGap }>
            { icons.map( icon => {
                return <Icon key={ icon.id + icon.name } name={ icon.name } size={ 20 } />
            })}
        </IconsWrap>
    );
};

export default IconsWrapper;