import styled, { css } from 'styled-components';
import Button from '@components/Button';
import Text from '@components/Text';
import TrashSVG from '@assets/trash.svg';
import PlusSVG from '@assets/plus.svg';
import MinusSVG from '@assets/minus.svg';

const ShoppingCategory = styled.div`
  margin-bottom: 3rem;
`;

const DeleteItem = styled(Button)`
  padding: 1rem 1.3rem;
  svg {
    height: 1.4rem;
  }
`;

const EditItem = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  min-width: 17rem;
  background: #fff;
  position: absolute;
  display: flex;
  align-items: center;
  right: -100%;
  transition: all 0.3s ease-in-out;
`;

export const EditQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`;

const SvgButton = styled.div`
  cursor: pointer;
  display: flex;
  color: ${({ theme }) => theme.colors.primary.main};
  svg {
    height: 1.6rem;
  }
`;

const ButtonQuantity = styled(Button)`
  ${({ theme }) => css`
    color: ${theme.colors.primary.main};
    border-radius: 24px;
    border: 2px solid ${theme.colors.primary.main};
    font-size: ${theme.fontSizes[1]}px;
    padding: 0.4rem 1.5rem;
  `};
  backface-visibility: hidden;
  background: transparent;
`;

const ShoppingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.8rem;
  position: relative;

  span {
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
  }

  :hover ${EditItem} {
    right: 0;
  }
`;

const CartItem = () => {
  return (
    <ShoppingItem>
      <span>Acocado</span>
      <ButtonQuantity Size='small'>3 pcs</ButtonQuantity>
      <EditItem>
        <DeleteItem status='primary'>
          <TrashSVG />
        </DeleteItem>
        <EditQuantity>
          <SvgButton>
            <MinusSVG />
          </SvgButton>
          <ButtonQuantity Size='small'>3 pcs</ButtonQuantity>
          <SvgButton>
            <PlusSVG />
          </SvgButton>
        </EditQuantity>
      </EditItem>
    </ShoppingItem>
  );
};

const CategoryItems = () => {
  return (
    <ShoppingCategory>
      <Text appearance='hint'>Fruit and vegetables</Text>
      <CartItem />
    </ShoppingCategory>
  );
};

export default CategoryItems;
