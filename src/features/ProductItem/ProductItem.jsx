import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledProductItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
`;

function ProductItem({ product }) {
  const { brand, title, price, description, images } = product;

  return (
    <StyledProductItem>
      <div>
        <h3>{brand}</h3>
        <h2>{title}</h2>
      </div>
      <div></div>
      <div>
        <p>{description}</p>
        <span>${price}</span>
      </div>
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
