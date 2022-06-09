import styled from "styled-components";
import Icon from "../Icon/Icon";
import { FlexBox } from "../FlexBox/FlexBox";
import { Link } from "react-router-dom";
import { IIconsHeader } from "../../../constants/iconsHeader";
import { IIconsFooter } from "../../../constants/iconsFooter";

interface IIconsWrapper{
    icons: IIconsHeader[] | IIconsFooter[]
    width?: number
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
                return <Link to={`/${icon.href}`} key={icon.name + icon.id}>
                    <Icon key={icon.id + icon.name} name={icon.name} size={20} />
                </Link>
            })}
        </IconsWrap>
    );
};

export default IconsWrapper;