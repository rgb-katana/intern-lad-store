import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../ui/Spinner';
import ProductItem from '../features/ProductItem/ProductItem';

const StyledProduct = styled.div`
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

function Product() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(
    function () {
      async function getProduct() {
        try {
          const response = await axios.get(
            `https://dummyjson.com/products/${id}`
          );
          setIsLoading(false);
          setProduct(response.data);
        } catch (error) {
          console.error(error);
        }
      }

      getProduct();
    },
    [id]
  );

  if (isLoading)
    return <StyledProduct>{isLoading && <Spinner />}</StyledProduct>;

  return (
    <StyledProduct>
      <ProductItem product={product} />
    </StyledProduct>
  );
}

export default Product;
