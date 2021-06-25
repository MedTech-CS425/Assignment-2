import styled from 'styled-components';

export const SideBarContainer = styled.aside`
  width: 9.4rem;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const SideBarContent = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

export const LogoLink = styled.a`
  cursor: pointer;
`;

export const ItemToolTip = styled.span`
  font-size: 12px;
  color: #fff;
  font-weight: 500;
  position: absolute;
  left: 80%;
  background: #454545;
  padding: 0.32px 1.4rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
  visibility: hidden;
  ::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: -6px;
    border-top: 4px solid transparent;
    border-right: 8px solid #454545;
    border-bottom: 4px solid transparent;
  }
`;

export const NavItem = styled.div<{ active?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 1rem 0;
  position: relative;
  align-items: center;
  margin-bottom: 1.4rem;

  :hover ${ItemToolTip} {
    opacity: 1;
    visibility: visible;
  }

  ::before {
    content: '';
    position: absolute;
    background: ${({ active, theme }) => active && theme.colors.primary.main};
    width: 6px;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 0px 4px 4px 0px;
  }
  svg {
    height: 25px;
    width: 25px;
  }
`;

export const ShoppingCart = styled.div`
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const ShoppingCount = styled.span`
  background: #eb5757;
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  font-size: 1.2rem;
  text-align: center;
  line-height: 2rem;
  position: absolute;
  top: -8%;
  right: -8%;
`;
