import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './productListSlice';
import styled from 'styled-components';
import { useEffect } from 'react';
import ListItem from './ListItem';
import Spinner from '../../ui/Spinner';

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100%;
  margin-bottom: 2rem;
`;

function ProductList({ page }) {
  const { productList } = useSelector(state => state.productList);
  const { isLoading } = useSelector(state => state.productList);

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getProducts(page));
      scroll(0, 0);
    },
    [page, dispatch]
  );

  return (
    <StyledProductList>
      {isLoading && <Spinner />}
      {productList.length !== 0 &&
        productList.map(product => (
          <ListItem product={product} key={product.id} />
        ))}
    </StyledProductList>
  );
}

export default ProductList;
