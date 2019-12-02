import React from "react";
import styled from "styled-components";

const TableHead = ({highlightDifferentItems, hideSameItems, changeHighlightDifferentItems, changehideSameItems}) => {
    return (
        <TH scope = "row">
            <Wrapper>
            <InlineWrapper>
                <input id = "check1" type = "checkbox" checked = {highlightDifferentItems} onChange = {changeHighlightDifferentItems}/>
                <label for = "check1">高亮不同项</label>
            </InlineWrapper>
            <InlineWrapper>
                <input id = "check2" type = "checkbox" checked = {hideSameItems} onChange = {changehideSameItems}/>
                <label for = "check2">隐藏相同项</label>
            </InlineWrapper>
            </Wrapper>
        </TH>
    )
}

export default TableHead;



const TH = styled.th`
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    border-collapse: collapse;
    font-weight: 400;
    background: #f7f7f7;
    color: #999;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 136px;
    padding: 25px 0 25px;
`
const InlineWrapper = styled.div`
    display: flex;
    align-items: center; 
    cursor: pointer;
    font-size: 14px;
    line-height: 14px;
`




