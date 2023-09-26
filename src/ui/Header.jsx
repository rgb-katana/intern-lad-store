import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { getCart } from '../features/Cart/cartSlice';

const StyledHeader = styled.header`
  background-color: var(--color-main-600);
  color: var(--color-grey-50);
  height: 5rem;
  border-bottom: 1px solid var(--color-main-200);
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  width: auto;
  padding: 0.5rem 0.7rem;
  align-self: center;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-out;
  gap: 1rem;

  &:link,
  &:visited {
    color: var(--color-grey-600);
    background-color: var(--color-main-100);
    font-size: 1.6rem;
    font-weight: 500;
    font-size: 2rem;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-700);
    background-color: var(--color-main-200);
    border-radius: var(--border-radius-sm);
  }
`;

const StyledCartIcon = styled(HiOutlineShoppingCart)`
  width: 2.5rem;
  height: auto;
`;

const StyledCounter = styled.div``;

function Header() {
  const cart = useSelector(getCart);

  return (
    <StyledHeader>
      <StyledNavLink to="/">
        <span>Fake Store</span>
      </StyledNavLink>
      <StyledNavLink to="shop/cart">
        <StyledCartIcon />
        <StyledCounter>{cart.length}</StyledCounter>
      </StyledNavLink>
    </StyledHeader>
  );
}

export default Header;
