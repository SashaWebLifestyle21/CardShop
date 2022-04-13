import styled from 'styled-components';
import { BOX } from "../Box/Box";

interface IWrapper{
    width?: number
    padding?: number
    margin?: string
    directWidth?: boolean
    backgroundColor?: string
}

export const Wrapper = styled(BOX)<IWrapper>`
  padding: ${props => props.padding || 16}px;
  max-width: ${props => props.width || 1232}${props => props.directWidth ? 'px' : '%'};
  width: 100%;
  margin: ${props => props.margin || '0 auto'};
  background-color: ${props => props.backgroundColor || 'transparent'};
`