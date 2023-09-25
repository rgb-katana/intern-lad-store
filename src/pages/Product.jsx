import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledProduct = styled.div``;

function Product() {
  const params = useParams();

  return <StyledProduct>{params.id}</StyledProduct>;
}

export default Product;
