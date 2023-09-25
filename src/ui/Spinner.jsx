import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  backdrop-filter: blur(10px);
  background: var(--color-main-500);
  animation: ${rotate} 3.4s cubic-bezier(0.17, 0.67, 0.83, 0.67) infinite;
`;

export default Spinner;
