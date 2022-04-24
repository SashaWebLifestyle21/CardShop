import styled from "styled-components";

interface IPrice {
    marginBottom?: number
}

export const Price = styled.p<IPrice>`
  font-weight: ${props => props.theme.fontWeight.semiBold};
  font-size: 24px;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.marginBottom || 0}px;
`