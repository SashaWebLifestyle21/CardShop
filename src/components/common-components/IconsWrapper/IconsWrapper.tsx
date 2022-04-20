import styled from "styled-components";
import Icon from "../Icon/Icon";
import { FlexBox } from "../FlexBox/FlexBox";

interface IIconsWrapper{
    icons: Array<any>
    width?: number,
    colGap?: number
}

interface IIconsWrap {
    width?: number,
    colGap?: number
}

const IconsWrap = styled(FlexBox)<IIconsWrap>`
  column-gap: ${props => props.colGap || 20}px;
  width: ${props => props.width}px;
`

const IconsWrapper = ({ icons, width, colGap }: IIconsWrapper) => {
    return (
        <IconsWrap width={width} colGap={colGap}>
            {icons.map(icon => {
                return <Icon key={icon.id + icon.name} name={icon.name} size={20} />
            })}
        </IconsWrap>
    );
};

export default IconsWrapper;