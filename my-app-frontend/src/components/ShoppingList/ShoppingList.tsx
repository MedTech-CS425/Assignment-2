import Flex from '@components/Flex';
import Button from '@components/Button';
import BottleSVG from '@assets/bottle.svg';
import PenSVG from '@assets/pen.svg';
import {
  ShoppingContainer,
  AddItemBox,
  AddItemContent,
  ShoppingName,
  EditShoppingName,
  ItemsList,
  SaveForm,
  SaveInput,
  ShoppingListAction,
} from './ShoppingList.styles';
import CategoryItems from './CategoryItems';

interface ShoppingListProps {
  handleToggleForm: () => void;
}

const ShoppingList: React.FC<ShoppingListProps> = ({ handleToggleForm }) => {
  return (
    <ShoppingContainer>
      <AddItemBox>
        <Flex>
          <BottleSVG />
          <AddItemContent>
            <span>Didn’t find what you need?</span>
            <Button onClick={handleToggleForm} Size='small'>
              Add Item
            </Button>
          </AddItemContent>
        </Flex>
      </AddItemBox>
      <Flex margin='0 0 3rem 0' align='center' justify='space-between'>
        <ShoppingName>Shopping List</ShoppingName>
        <EditShoppingName>
          <PenSVG />
        </EditShoppingName>
      </Flex>
      <ItemsList>
        <CategoryItems />
      </ItemsList>
      <ShoppingListAction>
        <SaveForm>
          {/* <SaveInput placeholder='Enter a name' margin='none' fullWidth value='' /> */}
          <Button status='primary' Size='small'>
            Save
          </Button>
        </SaveForm>
      </ShoppingListAction>
    </ShoppingContainer>
  );
};

export default ShoppingList;
