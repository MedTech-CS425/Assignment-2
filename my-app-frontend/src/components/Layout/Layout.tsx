import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ShoppingList from '@components/ShoppingList';
import AddItem from '@components/AddItem';
import SideBar from './SideBar';

const authPaths = ['/login', '/register', '/forgot_password'];

const Wrapper = styled.div`
  margin-left: 9.4rem;
  margin-right: 39rem;
`;

const Layout: React.FC = ({ children }) => {
  const { pathname } = useRouter();
  const [toggleAddForm, setToggleAddForm] = useState(false);

  if (authPaths.includes(pathname) || pathname.startsWith('/reset')) return <>{children}</>;

  const handleToggleForm = () => {
    setToggleAddForm(!toggleAddForm);
  };

  return (
    <main>
      <SideBar />
      <Wrapper>{children}</Wrapper>
      {toggleAddForm ? (
        <AddItem handleToggleForm={handleToggleForm} />
      ) : (
        <ShoppingList handleToggleForm={handleToggleForm} />
      )}
    </main>
  );
};

export default Layout;
