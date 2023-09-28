import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCart } from '../features/Cart/cartSlice';
import CartList from '../features/Cart/CartList';
import { NavLink } from 'react-router-dom';
import Row from '../ui/Row';

const StyledCart = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const StyledNavLink = styled(NavLink)`
  width: auto;
  padding: 0.3rem 0.7rem;
  align-self: center;
  text-align: center;

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
    /* color: var(--color-grey-800); */
    color: var(--color-grey-50);
    background-color: var(--color-main-600);
    border-radius: var(--border-radius-sm);
  }
`;

function Cart() {
  const cart = useSelector(getCart);

  return (
    <StyledCart>
      <h2>Your cart:</h2>
      <CartList cart={cart} />
      <Row type="horizontal">
        <StyledNavLink to="/order">Make an order</StyledNavLink>
        <StyledNavLink to="/">Back to shop</StyledNavLink>
      </Row>
    </StyledCart>
  );
}

export default Cart;
