import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import TableHead from "./TableHead";
import TableData from "./TableData";
import getPadding from "../../../../utils/getPadding";
import getTdContent from "../../../../utils/getTdContent";

const CommonItemsTable = ({comparativeResult}) => {
    if (comparativeResult.result.length === 0) {return null;}
    const commonData = comparativeResult.result.map(product => product["Common"]);
    const commonKeys = Object.keys(commonData[0]);
    return (
        <Table>
            <tbody>
                {commonKeys.map(key =>
                    (<tr>
                        <TableHead data = {key}/>
                        {commonData.map( product => <TableData data = {getTdContent(product[key])}/>)}
                        {getPadding(4, commonData.length + 1 , () => (<TableData/>) )}
                    </tr>)
                )}
            </tbody>
        </Table>
    );
};

function mapStateToProps(state) {
    const comparativeResult = state.compare.comparativeResult;
    return { comparativeResult }
}

export default connect( mapStateToProps, null)(CommonItemsTable);

const Table = styled.table`
    width: 100%;
    box-sizing: border-box;
    border-collapse: collapse;
    table-layout: fixed;
    border: 1px solid #e4e4e4;
    margin-top: -1px;
`