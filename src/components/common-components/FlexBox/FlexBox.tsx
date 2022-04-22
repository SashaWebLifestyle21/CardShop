import styled from "styled-components";

export interface IFlexBox {
    justifyContent?: TFlexBoxjustifyContentTypes;
    flexDirection?: TFlexBoxFlexDirectionTypes
    mb?: number
    padding?: number
    border?: string
}

type TFlexBoxjustifyContentTypes =
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

type TFlexBoxFlexDirectionTypes =
    | "row"
    | "column"

export const FlexBox = styled.div<IFlexBox>`
  display: flex;
  align-items: center;
  justify-content: ${p => p.justifyContent || 'center'};
  flex-direction: ${p => p.flexDirection || 'row'};
  margin-bottom: ${p => p.mb || 20}px;
  padding: ${props => props.padding}px;
  border-bottom: ${props => props.border};
  border-top: ${props => props.border};
`