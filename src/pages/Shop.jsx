import styled from "styled-components";
import ProductList from "../features/ProductList/ProductList";
import Pagination from "../features/Pagination/Pagination";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledShop = styled.div`
  padding: 2rem;
`;

function Shop() {
  const { page } = useParams();
  const { isLoading } = useSelector((state) => state.productList);

  return (
    <StyledShop>
      <ProductList page={Number(page)} />
      {!isLoading && <Pagination page={Number(page)} />}
    </StyledShop>
  );
}

export default Shop;
