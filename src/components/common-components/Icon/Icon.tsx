import React from "react";
import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";

interface IIcon {
    name: string
    size?: number
    transform?: string
    color?: string
}

const StyledSVGIcon = styled(ReactSVG)<IIcon>`
  svg {
    ${({ size }) =>
    size &&
    css`
        width: ${size}px;
        height: ${size}px;
      `}
    ${({ transform }) =>
    transform &&
    css`
        transform: ${transform};
      `}
    path {
      ${({ color }) =>
    color &&
    css`
          fill: ${color};
        `}
    }
  }
  cursor: pointer;
`;

const Icon = ({ name, color, size, transform }: IIcon) => {
    return (
        <StyledSVGIcon
            src={`/Icons/${name}.svg`}
            color={color}
            size={size}
            transform={transform}
        />
    );
};

export default React.memo(Icon);
