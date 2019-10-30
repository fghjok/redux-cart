import React from "react";
import styled from "styled-components";

const Item_Wrapper = styled.div`
  width: 100%;
  display: flex;
  border-top: 2px solid #d7d7d7;
  padding-top: 5px;
  margin-bottom: 25px;
`;
const Item_Inner_Left = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;
const Inner_Pic = styled.div`
  width: 85px;
  height: 85px;
`;
const Pic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Inner_Discription = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;
const Brand = styled.div`
  color: rgb(153, 153, 153);
  font-size: 13px;
  line-height: 19px;
`;
const Product = styled.div`
  font-size: 14px;
  line-height: 23px;
  color: rgb(51, 51, 51);
  flex-grow: 1;
`;
const Price = styled.div`
  color: rgb(232, 41, 89);
  font-size: 16px;
  line-height: 19px;
`;
const Item_Inner_Right = styled.div`
  display: flex;
  flex-direction: column;
`;
const Quantity = styled.div`
  flex-grow: 1;
`;
const Quantity_Inner = styled.div`
  display: flex;
  -moz-box-align: center;
  align-items: center;
  justify-content: space-around;
  font-size: 19px;
  line-height: 21px;
  border: 1px solid rgb(215, 215, 215);
  border-radius: 1.75rem;
  height: 1.75rem;
  width: 136px;
  font-size: 19px;
`;
const Minus = styled.span`
  font-size: 27px;
  cursor: pointer;
`;
const Plus = styled.span`
  cursor: pointer;
`;
const Removal = styled.div`
  text-align: right;
  color: darkorchid;
  font-size: 19px;
  font-weight: 400;
  cursor: pointer;
`;

const ListItemInCart = ({
  bigimg,
  brand,
  shortdiscription,
  price,
  number,
  addOneById,
  minusOneById,
  removeById
}) => (
  <Item_Wrapper>
    <Item_Inner_Left>
      <Inner_Pic>
        <Pic src={bigimg} />
      </Inner_Pic>
      <Inner_Discription>
        <Brand>{brand}</Brand>
        <Product>{shortdiscription}</Product>
        <Price>{price}</Price>
      </Inner_Discription>
    </Item_Inner_Left>
    <Item_Inner_Right>
      <Quantity>
        <Quantity_Inner>
          <Minus onClick={minusOneById}>-</Minus>
          <span>{number}</span>
          <Plus onClick={addOneById}>+</Plus>
        </Quantity_Inner>
      </Quantity>
      <Removal onClick={removeById}>Remove</Removal>
    </Item_Inner_Right>
  </Item_Wrapper>
);

export default ListItemInCart;
