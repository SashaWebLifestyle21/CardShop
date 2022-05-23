import styled from "styled-components";

export const TableBodyItemCol = styled.td`
  border-top: 1px solid ${props => props.theme.colors.lightGrey};
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
  padding: 5px;
  text-align: center;
  border-spacing: 0;

  @media ${props => props.theme.media.tablet} {
    font-size: 14px;
  }
  @media ${props => props.theme.media.phone} {
    font-size: 10px;
  }
`