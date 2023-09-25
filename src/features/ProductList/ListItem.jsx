import styled from 'styled-components';

const StyledListItem = styled.div`
  background-color: var(--color-grey-200);
  height: 10rem;
`;

function ListItem({ product }) {
  console.log(product);
  return (
    <StyledListItem>
      <span>{product.title}</span>
    </StyledListItem>
  );
}

export default ListItem;
