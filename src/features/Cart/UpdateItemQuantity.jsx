import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';
import Button from '../../ui/Button';

const StyledUpdateItemQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

function UpdateItemQuantity({ product, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <StyledUpdateItemQuantity>
      <Button
        variation="primary"
        size="medium"
        onClick={() => dispatch(decreaseItemQuantity(product))}
      >
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button
        variation="primary"
        size="medium"
        onClick={() => dispatch(increaseItemQuantity(product))}
      >
        +
      </Button>
    </StyledUpdateItemQuantity>
  );
}

export default UpdateItemQuantity;

UpdateItemQuantity.propTypes = {
  product: PropTypes.object,
  currentQuantity: PropTypes.number,
};
