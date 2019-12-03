import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actions as compareActions } from "../../../../redux/modules/compare";
import TableHead from "./TableHead";
import TableData from "./TableData";
import getPadding from "../../../../utils/getPadding";

const IntroductionTable = ({comparativeResult, highlightDifferentItems, hideSameItems, changeHighlightDifferentItems, changehideSameItems}) => {
    if (comparativeResult.length === 0) {return null;}
    const introductionData = comparativeResult.result.map(product => product["Introduction"]);
    const tableHead = 
    <TableHead
        highlightDifferentItems = {highlightDifferentItems} 
        hideSameItems = {hideSameItems} 
        changeHighlightDifferentItems = {changeHighlightDifferentItems} 
        changehideSameItems = {changehideSameItems}
    />;
    const occupiedPlaces = introductionData.map( (product, index) => <TableData data = {product} />);
    const emptyPlaces = getPadding(4, introductionData.length + 1, () => (<TableData data = {null}/>));
    return (
        <Wrapper>
            <Table>
                <TBody>
                    <TR>
                        {tableHead}
                        {occupiedPlaces}
                        {emptyPlaces}
                    </TR>
                </TBody>
            </Table>
        </Wrapper>
    )
}


function mapStateToProps(state) {
    const comparativeResult = state.compare.comparativeResult;
    const highlightDifferentItems = state.compare.highlightDifferentItems;
    const hideSameItems = state.compare.hideSameItems;
    return {
        comparativeResult, highlightDifferentItems, hideSameItems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeHighlightDifferentItems: () => (dispatch(compareActions.changeHighlightDifferentItems())),
        changehideSameItems: () => (dispatch(compareActions.changehideSameItems()))
    } 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IntroductionTable);


const Wrapper = styled.div`
    position: sticky;
    top: 0px;
    width: 1200px;
    z-index: 100;
`
const Table = styled.table`
    width: 100%;
    box-sizing: border-box;
    border-collapse: collapse;
    table-layout: fixed;
    border: 1px solid #e4e4e4;
    margin-top: -1px;
`

const TBody = styled.tbody`
    border-collapse: collapse;
`
const TR = styled.tr`
    border-collapse: collapse;
`


