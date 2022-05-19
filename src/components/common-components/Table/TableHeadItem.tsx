import styled from "styled-components";

export const TableHeadItem = styled.td`
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  font-size: 20px;
  text-align: center;
  padding: 5px;
`