import React from "react";
import styled from "styled-components";

interface IFlexBoxProps {
    alignItems?: string;
    justifyContent?: string;
    flexDirection?: string;
    mb?: number
    children: any;
}

interface IFlexBox {
    alignItems?: string;
    justifyContent?: string;
    flexDirection?: string;
    mb?: number
}

const Flex = styled.div<IFlexBox>`
  display: flex;
  align-items: ${p => p.alignItems || 'center'};
  justify-content: ${p => p.justifyContent || 'center'};
  flex-direction: ${p => p.flexDirection || 'row'};
  margin-bottom: ${p => p.mb || 20}px;
`;

const FlexBox = ({ alignItems, flexDirection, justifyContent, children, mb }: IFlexBoxProps) => {
    return(
        <Flex
            alignItems={ alignItems }
            flexDirection={ flexDirection }
            justifyContent={ justifyContent }
            mb={ mb }
        >
            { children }
        </Flex>
)
}


export default FlexBox