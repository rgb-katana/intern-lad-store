import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: var(--color-main-600);
  color: var(--color-grey-50);
  height: 5rem;
  border-bottom: 1px solid var(--color-main-200);
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
