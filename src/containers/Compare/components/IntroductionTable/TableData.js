import React from "react";
import styled from "styled-components";

const TableData = ({data}) => {
    if (data === null) {
        return <TD></TD>
    }
    return (
        <TD>
            <Wrapper>
                <DivLeft>
                    <IMG src = {data.smallimg}/>
                </DivLeft>
                <DivRight>
                    <Discription>{data.discription}</Discription>
                    <Price>{data.price}</Price>
                    <RightLowerWrapper>
                        <ProductLink>立即查看</ProductLink>
                    </RightLowerWrapper>
                </DivRight>
            </Wrapper>
        </TD>
    )
}

export default TableData;

const TD = styled.td`
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    border-collapse: collapse;
    width: 271px;
    background: #ffffff;
`
const Wrapper = styled.div`
    padding: 20px 0 16px;
    
    height: 136px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%
`
const DivLeft = styled.div`
    flex: 0 0 100px;
    height: 100%;
`
const IMG = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const DivRight = styled.div`
    flex: 0 0 140px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
`
const Discription = styled.div`
    height: 32px;
    overflow: hidden;
    line-height: 16px;
    font-size: 12px;
`
const Price = styled.div`
    color: #e03437;
    line-height: 28px;
    font-size: 20px;
`
const RightLowerWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const ProductLink = styled.a`
    display: inline-block;
    height: 30px;
    width: 80px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    background-color: #cdcdcd;
    cursor: pointer;
`

