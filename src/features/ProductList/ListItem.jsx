import styled from "styled-components";

const StyledListItem = styled.div`
  background-color: var(--color-grey-200);
  height: 10rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const StyledImg = styled.img`
  width: 7rem;
  height: 8rem;
`;

const StyledTitlePrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function ListItem({ product }) {
  console.log(product);
  return (
    <StyledListItem>
      <StyledImg src={product.images[0]} alt={product.title} />
      <StyledTitlePrice>
        <span>{product.title}</span>
        <span>${product.price}</span>
      </StyledTitlePrice>
    </StyledListItem>
  );
}

export default ListItem;
