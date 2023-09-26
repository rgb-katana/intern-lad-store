import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { getCurrentQuantityById } from './cartSlice';
import UpdateItemQuantity from './UpdateItemQuantity';

export const StyledCartItem = styled.div`
  background-color: white;
  padding: 1rem 2rem;
  border: 1px solid var(--color-grey-200);
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
`;

export const InnerContainer = styled.div`
  align-self: center;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  &:first-child {
    justify-content: left;
  }
  &:not(:last-child) {
    border-right: 3px solid var(--color-grey-700);
  }
  &:last-child {
    justify-content: right;
  }
`;

export const Price = styled.span`
  color: green;
`;

function CartItem({ item }) {
  const currentQuantity = useSelector(getCurrentQuantityById(item.id));

  return (
    <StyledCartItem>
      <InnerContainer>
        <span>{item.title}</span>
      </InnerContainer>
      <InnerContainer>
        <Price>${item.price}</Price>
      </InnerContainer>
      <InnerContainer>
        <UpdateItemQuantity product={item} currentQuantity={currentQuantity} />
      </InnerContainer>
    </StyledCartItem>
  );
}

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
  }),
};
