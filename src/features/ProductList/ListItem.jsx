import styled from 'styled-components';

const StyledListItem = styled.div`
  background-color: white;
  border: 1px solid var(--color-grey-200);
  height: 30rem;
  max-width: 80rem;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 40rem;
  }
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
  object-fit: fill;
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
      <ImgContainer>
        <StyledImg src={product.images[0]} alt={product.title} />
      </ImgContainer>
      <StyledTitlePrice>
        <span>{product.title}</span>
        <span>${product.price}</span>
      </StyledTitlePrice>
    </StyledListItem>
  );
}

export default ListItem;
