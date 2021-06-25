import Flex from '@components/Flex';
import Input from '@components/Input';
import styled, { css } from 'styled-components';

const HeaderContainer = styled.div`
  padding: 3.5rem 8rem;
`;

const PageTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[4]}px;
    span {
      color: ${theme.colors.primary.main};
      font-weight: ${theme.fontWeights[2]};
    }
  `};

  max-width: 45rem;
`;

const Form = styled.form`
  width: 25rem;
`;

const PageHeader = () => {
  return (
    <HeaderContainer>
      <Flex justify='space-between'>
        <PageTitle>
          <span>Shoppingify&nbsp;</span>
          allows you take your shopping list wherever you go
        </PageTitle>
        <Form>
          <Input.Search fullWidth placeholder='Search item' />
        </Form>
      </Flex>
    </HeaderContainer>
  );
};

export default PageHeader;
