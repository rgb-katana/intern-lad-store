import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--color-main-600);
  color: var(--color-grey-50);
  height: 5rem;
  border-top: 1px solid var(--color-main-200);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return <StyledFooter>Footer</StyledFooter>;
}

export default Footer;
