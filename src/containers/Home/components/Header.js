import React from "react";
import CartButton from "../components/CartButton";
import Badge from "../components/Badge";
import styled from "styled-components";

const MainHeader = styled.div`
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 350;
    -moz-box-align: stretch;
    align-items: stretch;
    background-color: transparent;
    display: flex;
    font-family: Bloomfield, Helvetica Neue, Helvetica, Arial, sans-serif;
    box-sizing: border-boxS;
    height: 6rem;
    justify-content: flex-end;
`;

const Header = ({ numberOfSelectedItems, openDrawer }) => (
    <MainHeader>
        <CartButton openDrawer={openDrawer} />
        <Badge number={numberOfSelectedItems} />
    </MainHeader>
);

export default Header;
