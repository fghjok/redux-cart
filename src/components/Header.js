import React from "react";
import CartButton from "../components/CartButton";
import Badge from "../components/Badge";
import styled from "styled-components";

const Main_Header = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 350;
  -moz-box-align: stretch;
  align-items: stretch;
  background-color: transparent;
  display: flex;
  font-family: Bloomfield, Helvetica Neue, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  height: 6rem;
  justify-content: flex-end;
`;

const Header = ({ numberOfSelectedItems, open }) => (
  <Main_Header>
    <CartButton open={open} />
    <Badge number={numberOfSelectedItems} />
  </Main_Header>
);

export default Header;
