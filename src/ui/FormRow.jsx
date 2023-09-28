import styled from 'styled-components';

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 15rem 1fr 0.5fr;
  gap: 1.2rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  text-align: right;
  align-self: center;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
  align-self: center;
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}:</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
