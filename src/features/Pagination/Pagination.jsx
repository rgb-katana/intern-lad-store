import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledPagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const StyledNavLink = styled(NavLink)`
  width: auto;
  padding: 0.3rem;
  align-self: center;
  text-align: center;

  &:link,
  &:visited {
    color: var(--color-grey-600);
    background-color: var(--color-main-100);
    font-size: 1.6rem;
    font-weight: 500;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    /* color: var(--color-grey-800); */
    color: var(--color-grey-50);
    background-color: var(--color-main-600);
    border-radius: var(--border-radius-sm);
  }
`;

function Pagination({ page }) {
  let pages;

  // Так как мы знаем что будет всего 10 страниц:
  if (page === 1 || page === 2) pages = [1, 2, 3, null, 10];
  if (page === 9 || page === 10) pages = [1, null, 8, 9, 10];
  if (page === 3) pages = [1, 2, 3, 4, null, 10];
  if (page === 8) pages = [1, null, 7, 8, 9, 10];
  if (![1, 2, 3, 8, 9, 10].includes(page))
    pages = [1, null, page - 1, page, page + 1, null, 10];

  return (
    <StyledPagination>
      {pages.map((page, index) => {
        if (page !== null)
          return (
            <li key={index}>
              <StyledNavLink to={`/shop/products/${page}`}>
                {page}
              </StyledNavLink>
            </li>
          );
        return (
          <li key={index}>
            <span>...</span>
          </li>
        );
      })}
    </StyledPagination>
  );
}

export default Pagination;
