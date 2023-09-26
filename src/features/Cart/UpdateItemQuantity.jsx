import { useDispatch } from "react-redux";
import styled from "styled-components";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const StyledUpdateItemQuantity = styled.div``;

function UpdateItemQuantity({ product, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <StyledUpdateItemQuantity>
      <button onClick={() => dispatch(decreaseItemQuantity(product))}>-</button>
      <span>{currentQuantity}</span>
      <button onClick={() => dispatch(increaseItemQuantity(product))}>+</button>
    </StyledUpdateItemQuantity>
  );
}

export default UpdateItemQuantity;
