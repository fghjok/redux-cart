import React from "react";
import styled from "styled-components";

const PlaceHolderInPop = ({showNum}) => {
    const result = (
        <Wrapper>
            <NumWrapper>{showNum}</NumWrapper>
            <TextWrapper>您还可以继续添加</TextWrapper>
        </Wrapper>
    );

    return result;
}

export default PlaceHolderInPop;

const Wrapper = styled.div`
    width: 193px;
    height: 54px;
    padding-right: 10px;
    border-right: 1px dotted #7abd54;
    margin-right: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
`
const NumWrapper = styled.div`
    flex: 0 48px;
    height: 100%;
    background: #f6f6f6;
    color: #ccc;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
`

const TextWrapper = styled.div`
    flex: 1;
    height: 100%;
    color: #ccc;
`