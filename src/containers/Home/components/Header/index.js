import React from "react";
import CartButton from "./CartButton";
import Badge from "./Badge";
import styled from "styled-components";
import { connect } from "react-redux";
import { actions as homeActions } from "../../../../redux/modules/home";

const Header = ({ numberOfSelectedItems, openDrawer }) => (
    <MainHeader>
        <CartButton openDrawer={openDrawer} />
        <Badge number={numberOfSelectedItems} />
    </MainHeader>
);

function mapStateToProps(state) {
    const numberOfSelectedItems = state.home.selectedItems.reduce(
        (sum, current) => sum + current.num,
        0
    );
    return { numberOfSelectedItems };
}
  
function mapDispatchToProps(dispatch) {
    return {
        openDrawer: () => dispatch(homeActions.openDrawer())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

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