import React from "react";
import styled from "styled-components";

const TableHead = ({data}) => {
    return (
        <TH scope = "row">
            <Wrapper>
                {data}
            </Wrapper>
        </TH>
    )
}

export default TableHead;



const TH = styled.th`
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    border-collapse: collapse;
    height: 61px;
    font-weight: 400;
    background: #f7f7f7;
    color: #999;
    font-size: 12px;
`
const Wrapper = styled.div`
    text-align: right;
    margin-right: 36px;
    box-sizing: border-box;
    width: 80px;
`
