import PropTypes from 'prop-types';
import styled from 'styled-components';
import CartItem, { InnerContainer, Price, StyledCartItem } from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getTotalCartPrice } from './cartSlice';

const StyledCartList = styled.ul`
  margin-top: 2rem;
  width: 95%;
  max-width: 80rem;
  display: grid;
  grid-template-rows: auto;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

function CartList({ cart }) {
  const dispatch = useDispatch();
  const price = useSelector(getTotalCartPrice);

  return (
    <StyledCartList>
      {cart.map(item => (
        <li key={item.id}>
          <CartItem item={item} />
        </li>
      ))}
      <StyledCartItem>
        <InnerContainer>
          <h3>Total items: {cart.length}</h3>
        </InnerContainer>
        <InnerContainer>
          <h3 style={{ textAlign: 'center' }}>
            Total price: <Price>${price}</Price>
          </h3>
        </InnerContainer>
        <InnerContainer>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </InnerContainer>
      </StyledCartItem>
    </StyledCartList>
  );
}

export default CartList;

CartList.propTypes = {
  cart: PropTypes.array,
};
