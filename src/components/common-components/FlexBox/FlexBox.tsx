import styled from "styled-components";

export interface IFlexBox {
    justifyContent?: TFlexBoxjustifyContentTypes;
    flexDirection?: string
    mb?: number
}

type TFlexBoxjustifyContentTypes =
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

export const Flex = styled.div<IFlexBox>`
  display: flex;
  align-items: center;
  justify-content: ${p => p.justifyContent || 'center'};
  flex-direction: ${p => p.flexDirection || 'row'};
  margin-bottom: ${p => p.mb || 20}px;
`