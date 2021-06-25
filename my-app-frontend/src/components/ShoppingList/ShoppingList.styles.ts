import styled, { css } from 'styled-components';
import Input from '@components/Input';

export const ShoppingContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary.light};
  width: 39rem;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  padding: 4rem 4.5rem;
`;

export const AddItemBox = styled.div`
  background: #80485b;
  border-radius: 2.4rem;
  margin-bottom: 4.2rem;
  svg {
    margin-top: -1.6rem;
    margin-left: 1rem;
  }
`;

export const AddItemContent = styled.div`
  padding: 1.5rem 2.4rem;
  display: flex;
  flex-direction: column;

  span {
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
    color: #fff;
    margin-bottom: 1.3rem;
  }
`;

export const ShoppingName = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[2]};
    font-size: ${theme.fontSizes[4]}px;
  `};
`;

export const EditShoppingName = styled.div`
  display: flex;
  cursor: pointer;
  svg {
    height: 2rem;
    width: 2rem;
  }
`;

export const ItemsList = styled.div`
  height: calc(100% - 30rem);
  overflow: hidden;
`;

export const ShoppingListAction = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3.5rem 4rem;
  background: #fff;
`;

export const SaveInput = styled(Input)`
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
`;

export const SaveForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    margin-left: 0.5rem;
  }
`;
