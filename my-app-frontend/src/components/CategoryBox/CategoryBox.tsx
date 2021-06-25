import PlusSVG from '@assets/plus.svg';
import { CategoryTitle, Container, Item, ItemsList } from './CategoryBox.styles';

const CategoryBox = () => {
  return (
    <Container>
      <CategoryTitle>Fruit and vegetables</CategoryTitle>
      <ItemsList>
        <Item>
          <span>Avocado</span>
          <PlusSVG />
        </Item>
      </ItemsList>
    </Container>
  );
};

export default CategoryBox;
