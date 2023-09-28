import PropTypes from 'prop-types';

import styled from 'styled-components';
import Slider from './Slider';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../Cart/cartSlice';
import UpdateItemQuantity from '../Cart/UpdateItemQuantity';
import Button from '../../ui/Button';

const StyledProductItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 43rem 1fr auto;
  }
`;

const SlideContainer = styled.div`
  width: 50rem;
  @media (max-width: 768px) {
    width: 35rem;
    height: 25rem;
    margin: 0 auto;
    grid-row: 1 / 2;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-rows: 0.3fr 0.3fr 0.3fr 0.3fr 1fr;
  padding: 1rem 0.5rem;
  max-width: 60rem;
  /* border: 1px solid var(--color-grey-200); */
  /* background-color: white; */
  @media (max-width: 768px) {
    grid-row: 2 / 3;
    max-width: 50rem;
    margin: 0 auto;
  }
`;

const BuyContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: start;
  margin-top: 1rem;
  /* @media (max-width: 768px) {
    grid-row: 3 / -1;
  } */
`;

const BoldTextSpan = styled.span`
  font-weight: 600;
`;

const RegularTextSpan = styled.span`
  font-weight: 400;
`;

function ProductItem({ product }) {
  const { brand, title, price, description, images } = product;

  const currentQuantity = useSelector(getCurrentQuantityById(product.id));
  const isInCart = currentQuantity > 0;

  const dispatch = useDispatch();

  function handleAddToCart() {
    const newProduct = {
      ...product,
      quantity: 1,
      totalPrice: product.price * 1,
    };
    dispatch(addItem(newProduct));
  }

  return (
    <StyledProductItem>
      <SlideContainer>
        <Slider images={images} />
      </SlideContainer>
      <InfoContainer>
        <h3>
          <BoldTextSpan>Brand:</BoldTextSpan>{' '}
          <RegularTextSpan>{brand}</RegularTextSpan>
        </h3>
        <h2>
          <BoldTextSpan>Product title:</BoldTextSpan>{' '}
          <RegularTextSpan>{title}</RegularTextSpan>
        </h2>
        <p>
          <BoldTextSpan>Description:</BoldTextSpan>{' '}
          <RegularTextSpan>{description}</RegularTextSpan>
        </p>
        <span>
          <BoldTextSpan>Price:</BoldTextSpan>{' '}
          <RegularTextSpan>${price}</RegularTextSpan>
        </span>
        <BuyContainer>
          {isInCart && (
            <UpdateItemQuantity
              product={product}
              currentQuantity={currentQuantity}
            />
          )}
          {!isInCart && <Button onClick={handleAddToCart}>Add to cart</Button>}
        </BuyContainer>
      </InfoContainer>
    </StyledProductItem>
  );
}

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    images: PropTypes.array,
  }),
};
