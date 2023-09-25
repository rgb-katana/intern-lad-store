import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './productListSlice';
import styled from 'styled-components';
import { useEffect } from 'react';
import ListItem from './ListItem';
import Spinner from '../../ui/Spinner';

const StyledProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
`;

function ProductList({ page }) {
  const { productList } = useSelector(state => state.productList);
  const { isLoading } = useSelector(state => state.productList);

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getProducts(page));
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
