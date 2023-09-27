import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addItem, getCurrentQuantityById } from '../Cart/cartSlice';
import UpdateItemQuantity from '../Cart/UpdateItemQuantity';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';

const StyledListItem = styled.div`
  background-color: white;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  height: 30rem;
  max-width: 80rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    height: 32rem;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr 1fr;
  }
  cursor: pointer;
`;

const ImgContainer = styled.div`
  display: block;
  width: auto;
  max-width: 35rem;
  height: 15rem;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledTitlePrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const BuyContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 3 / -1;
  }
`;

function ListItem({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = function (e) {
    if (e.target.type === 'submit') return;
    navigate(`/shop/product/${product.id}`);
  };

  const currentQuantity = useSelector(getCurrentQuantityById(product.id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newProduct = {
      ...product,
      quantity: 1,
      totalPrice: product.price * 1,
    };
    dispatch(addItem(newProduct));
  }

  return (
    <StyledListItem onClick={e => handleNavigate(e)}>
      <ImgContainer>
        <StyledImg src={product.images[0]} alt={product.title} />
      </ImgContainer>
      <StyledTitlePrice>
        <span style={{ textAlign: 'center' }}>{product.title}</span>
        <span>${product.price}</span>
      </StyledTitlePrice>
      <BuyContainer>
        {isInCart && (
          <UpdateItemQuantity
            product={product}
            currentQuantity={currentQuantity}
          />
        )}
        {!isInCart && <Button onClick={handleAddToCart}>Add to cart</Button>}
      </BuyContainer>
    </StyledListItem>
  );
}

export default ListItem;

ListItem.propTypes = {
  product: PropTypes.object,
};
