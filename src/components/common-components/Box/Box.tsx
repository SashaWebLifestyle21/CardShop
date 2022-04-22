import styled from "styled-components";

interface IBox {
    width?: number
    height?: number
    marginTop?: number
    marginBottom?: number
    marginLeft?: number
    marginRight?: number
    marginAuto?: boolean
    paddingTop?: number
    paddingBottom?: number
    paddingLeft?: number
    paddingRight?: number
    isHovered?: boolean
}

export const Box = styled.div<IBox>`
  display: block;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-left: ${props => props.marginLeft || 0}px;
  margin-right: ${props => props.marginRight || 0}px;
  padding-top: ${props => props.paddingTop || 0}px;
  padding-bottom: ${props => props.paddingBottom || 0}px;
  padding-left: ${props => props.paddingLeft || 0}px;
  padding-right: ${props => props.paddingRight || 0}px;
  margin: ${props => props.marginAuto ? '0 auto' : ''};
`