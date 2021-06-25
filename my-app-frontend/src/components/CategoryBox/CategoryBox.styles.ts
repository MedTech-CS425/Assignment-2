import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 6rem;
`;

export const CategoryTitle = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[0]};
    font-size: ${theme.fontSizes[3]}px;
  `};
`;

export const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.2rem, 20.2rem));
  grid-gap: 4.5rem 2rem;
  margin-top: 1.8rem;
`;

export const Item = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1.6rem 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  color: #c1c1c4;
  span {
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
    color: ${({ theme }) => theme.colors.text.main};
  }

  svg {
    height: 1.6rem;
  }
`;
