import React from "react";
import styled from "styled-components";

const TableHead = ({data}) => {
    return (
        <TD>
            <Wrapper>
                {data}
            </Wrapper>
        </TD>
    )
}

export default TableHead;



const TD = styled.td`
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    border-collapse: collapse;
    height: 61px;
    width: 271px;
    font-weight: 400;
    background: #ffffff;
    color: #666666;
    font-size: 12px;
`
const Wrapper = styled.div`
    text-align: left;
    box-sizing: border-box;
    padding-left: 35px;
    width: 220px;
`