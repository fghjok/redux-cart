import React from "react";
import { connect } from "react-redux";
import SubTable from "./SubTable"

const SpecificItemsTable = ({comparativeResult, highlightDifferentItems, hideSameItems}) => {
    if (comparativeResult.result.length === 0) {return null;}
    const specificData = comparativeResult.result.map(
        product => {
            const copy = {...product};
            delete copy["Introduction"];
            delete copy["Common"];
            return copy
        }
    )
    const firstProductTableNames = Object.keys(specificData[0]);
    return (
        firstProductTableNames.map( 
            name => <SubTable 
                name = {name} 
                data = {specificData}
                highlightDifferentItems = {highlightDifferentItems}
                hideSameItems = {hideSameItems}
            />
        )
    )
}

function mapStateToProps(state) {
    const comparativeResult = state.compare.comparativeResult;
    const highlightDifferentItems = state.compare.highlightDifferentItems;
    const hideSameItems = state.compare.hideSameItems;
    return { comparativeResult, highlightDifferentItems, hideSameItems }
}

export default connect( mapStateToProps, null )(SpecificItemsTable);



