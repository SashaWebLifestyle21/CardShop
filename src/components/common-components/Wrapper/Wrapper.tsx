import styled from 'styled-components';
import { Box } from "../Box/Box";

interface IWrapper {
    width?: number
    padding?: number
    marginTop?: number
    marginBottom?: number
    marginLeft?: number
    marginRight?: number
    marginAuto?: boolean
    directWidth?: boolean
    backgroundColor?: string
    position?: TWrapperPositionTypes
}

type TWrapperPositionTypes =
    | "relative"
    | "absolute"
    | "fixed"

export const Wrapper = styled(Box)<IWrapper>`
  position: ${props => props.position || 'static'};
  padding: ${props => props.padding || 16}px;
  max-width: ${props => props.width || 1232}${props => props.directWidth ? 'px' : '%'};
  width: 100%;
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-left: ${props => props.marginLeft || 0}px;
  margin-right: ${props => props.marginRight || 0}px;
  margin: ${props => props.marginAuto ? '' : '0 auto'};
  background-color: ${props => props.backgroundColor || 'transparent'};
`