import React from "react";
import styled from "styled-components";

export const TableBodyItemRow = styled.tr``

export const TableBodyItemCol = styled.td`
  border-top: 1px solid ${props => props.theme.colors.lightGrey};
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
  padding: 5px;
  text-align: center;
  border-spacing: 0;
`