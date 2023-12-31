import styled from 'styled-components';
import CreateOrderForm from '../features/Order/CreateOrderForm';

const StyledOrderFormContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function Order() {
  return (
    <StyledOrderFormContainer>
      <CreateOrderForm />
    </StyledOrderFormContainer>
  );
}

export default Order;
