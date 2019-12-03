import React, { Component } from "react";
import styled from "styled-components";
import LongTableHead from "./LongTableHead";
import TableHead from "./TableHead";
import TableData from "./TableData";
import getPadding from "../../../../utils/getPadding";
import getTdContent from "../../../../utils/getTdContent";

class SubTable extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true}
        this.handleCollapse = this.handleCollapse.bind(this);
    }
    
    handleCollapse() {
        this.setState(state => ({
            open: !state.open
        }));
    }

    render() {
        const { name, data, highlightDifferentItems, hideSameItems }= this.props;
        return (
            <Table>
                <tbody>
                    <LongTableHead data = {name} handleCollapse = {this.handleCollapse} open = {this.state.open}/>
                    {this.state.open && getTableContent(data, name, highlightDifferentItems, hideSameItems )}
                </tbody>
            </Table>
        )
    }
}

const getTableContent = (data, name, highlightDifferentItems, hideSameItems ) => {
    const tableKeys = Object.keys(data[0][name]);
    const equalityResult = tableKeys.map(key => testIsAllSame(data, name, key) )
    return (
        tableKeys.map( 
            (key, index) => (
                (equalityResult[index] && hideSameItems)
                ?
                    null
                :
                    <tr>
                        <TableHead data = {key}/>
                        {data.map( product => 
                            <TableData 
                                data = {getTdContent(product[name][key])}
                                isAllSame = {equalityResult[index]}
                                highlightDifferentItems = {highlightDifferentItems}
                            />)}
                        {getPadding(
                            4,
                            data.length + 1,
                            () => (<TableData
                                    isAllSame = {equalityResult[index]}
                                    highlightDifferentItems = {highlightDifferentItems}
                                    />) 
                        )}
                    </tr>
            )
        )
    )
}

const testIsAllSame = (data, name, key) => {
    const firstValue = data[0][name][key];
    const restArray = data.slice(1);
    const result = restArray.findIndex(product => product[name][key] !== firstValue)
    return result === -1 ? true : false;
}

export default SubTable;

const Table = styled.table`
    width: 100%;
    box-sizing: border-box;
    border-collapse: collapse;
    table-layout: fixed;
    border: 1px solid #e4e4e4;
    margin-top: -1px;
`