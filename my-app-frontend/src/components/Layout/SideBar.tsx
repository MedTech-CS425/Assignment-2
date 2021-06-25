import Link from 'next/link';
import { useRouter } from 'next/router';
import Flex from '@components/Flex';
import LogoSVG from '@assets/logo.svg';
import ListSVG from '@assets/list.svg';
import HistorySVG from '@assets/history.svg';
import StatsSVG from '@assets/stats.svg';
import CartSVG from '@assets/cart.svg';
import {
  ItemToolTip,
  NavItem,
  LogoLink,
  ShoppingCart,
  ShoppingCount,
  SideBarContainer,
  SideBarContent,
} from './Sidebar.styles';

const NavLinks = [
  {
    name: 'Items',
    svg: <ListSVG />,
    href: '/',
  },
  {
    name: 'History',
    svg: <HistorySVG />,
    href: '/history',
  },
  {
    name: 'Statistics',
    svg: <StatsSVG />,
    href: '/statistics',
  },
];

const SideBar = () => {
  const { asPath } = useRouter();

  return (
    <SideBarContainer>
      <SideBarContent>
        <LogoLink href='/'>
          <LogoSVG />
        </LogoLink>
        <Flex fullWidth direction='column'>
          {NavLinks.map((el) => (
            <Link key={el.href} href={el.href}>
              <NavItem active={asPath === el.href}>
                {el.svg}
                <ItemToolTip>{el.name}</ItemToolTip>
              </NavItem>
            </Link>
          ))}
        </Flex>
        <ShoppingCart>
          <CartSVG />
          <ShoppingCount>3</ShoppingCount>
        </ShoppingCart>
      </SideBarContent>
    </SideBarContainer>
  );
};

export default SideBar;
