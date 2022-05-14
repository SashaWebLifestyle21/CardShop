import styled from "styled-components";

export interface IFlexBox {
    justifyContent?: TFlexBoxjustifyContentTypes;
    flexDirection?: TFlexBoxFlexDirectionTypes
    alignItems?: TFlexBoxAlignItemsTypes
    mb?: number
    padding?: number
    border?: string
    width?: number
    height?: number
    marginAuto?: boolean
}

type TFlexBoxjustifyContentTypes =
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "end";

type TFlexBoxFlexDirectionTypes =
    | "row"
    | "column"

type TFlexBoxAlignItemsTypes =
    | "centre"
    | "baseline"

export const FlexBox = styled.div<IFlexBox>`
  display: flex;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${p => p.justifyContent || 'center'};
  flex-direction: ${p => p.flexDirection || 'row'};
  margin: ${props => props.marginAuto ? '0 auto' : 0};
  margin-bottom: ${p => p.mb || 0}px;
  padding: ${props => props.padding}px;
  border-bottom: ${props => props.border};
  border-top: ${props => props.border};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`