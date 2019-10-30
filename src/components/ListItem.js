import React from "react";
import styled from "styled-components";

const Pic = styled.img`
  width: 160px;
  height: 160px;
  margin: 0 auto;
  display: block;
  border: 0;
  :hover {
    opacity: 0.7;
  }
`;
const Info = styled.div`
  margin-top: 10px;
`;
const Two_Lines = styled.div`
  height: 36px;
  font-size: 14px;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #666;
  :hover {
    color: #f02b2b;
  }
`;
const Price = styled.div`
  margin-top: 5px;
  color: #f02b2b;
  font-size: 19px;
`;
const Add_To_Cart = styled.div`
  padding-top: 10px;
`;
const Add_To_Cart_Button = styled.button`
  border-radius: 4px;
  height: 25px;
  width: 90px;
  background-color: #f02b2b;
  color: azure;
`;
const Wrapper = styled.div`
  padding: 12px 32px 12px 32px;
  cursor: pointer;
`;
const ListItem = ({ bigimg, longdiscription, price, addToCartById }) => (
  <Wrapper>
    <Pic src={bigimg} />
    <Info>
      <Two_Lines>{longdiscription}</Two_Lines>
      <Price>{price}</Price>
      <Add_To_Cart>
        <Add_To_Cart_Button onClick={addToCartById}>
          Add to Cart
        </Add_To_Cart_Button>
      </Add_To_Cart>
    </Info>
  </Wrapper>
);

export default ListItem;
