import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ErrorMessage } from '@hookform/error-message';
import { useForm, Controller } from 'react-hook-form';
import Button from '@components/Button';
import Dropdown from '@components/Dropdown';
import Flex from '@components/Flex';
import Input from '@components/Input';
import { AddItemInputs, ICategory } from 'types';
import { useAddItem, useCategoires } from '@hooks/useItem';
import Text from '@components/Text';

const AddItemContainer = styled.div`
  width: 39rem;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  padding: 3.5rem 4.5rem;
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  margin-bottom: 3rem;
`;

interface AddItemsProps {
  handleToggleForm: () => void;
}

const AddItem: React.FC<AddItemsProps> = ({ handleToggleForm }) => {
  const [categoires, setCategoires] = useState<{ id: string; name: string }[]>([]);
  const [categoryValue, setCategoryValue] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [mutate, { isLoading, data }] = useAddItem();
  const { data: items } = useCategoires();
  const { handleSubmit, control, errors } = useForm<AddItemInputs>({
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (inputs: AddItemInputs) => {
    if (!categoryValue) {
      setCategoryError('Category is required!');
    } else {
      const { name, ...rest } = inputs;
      mutate({
        name,
        ...rest,
        categoryName: categoryValue,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryValue(e.target.value);
  };

  const handleDropDownSelect = (value: string) => {
    setCategoryValue(value);
    setCategoires([]);
  };

  useEffect(() => {
    if (categoryValue) {
      setCategoryError('');
      const newCategoires = items?.categoires.filter((el) =>
        el.name.toLowerCase().includes(categoryValue)
      ) as ICategory[];
      setCategoires(newCategoires);
    } else {
      setCategoires([]);
    }
  }, [categoryValue]);

  useEffect(() => {
    if (data?.item) {
      handleToggleForm();
    }
  }, [isLoading]);

  return (
    <AddItemContainer>
      <Title>Add a new item</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={(props) => (
            <Input fullWidth Size='large' label='Name' placeholder='Enter a name' {...props} />
          )}
          name='name'
          control={control}
          rules={{
            required: 'Name is required',
          }}
        />
        <ErrorMessage errors={errors} name='name' as={<Text status='danger' />} />
        <Controller
          render={(props) => (
            <Input.TextArea
              fullWidth
              Size='large'
              label='Note (optional)'
              placeholder='Enter a note'
              {...props}
            />
          )}
          name='note'
          control={control}
        />
        <Controller
          render={(props) => (
            <Input
              fullWidth
              Size='large'
              label='Image (optional)'
              placeholder='Enter a image'
              {...props}
            />
          )}
          name='image'
          control={control}
        />
        <Dropdown handleDropDownSelect={handleDropDownSelect} items={categoires}>
          <Input
            placeholder='Enter a category'
            label='Category'
            fullWidth
            name='category'
            Size='large'
            onChange={handleChange}
            value={categoryValue}
          />
        </Dropdown>
        {categoryError && <Text status='danger'>{categoryError}</Text>}
        <Flex margin='3rem 0 0 0' justify='center'>
          <Button onClick={handleToggleForm} margin='0 2rem 0 0'>
            cancal
          </Button>
          <Button disabled={isLoading} type='submit' status='primary'>
            {isLoading ? 'Saving' : 'save'}
          </Button>
        </Flex>
      </form>
    </AddItemContainer>
  );
};

export default AddItem;
