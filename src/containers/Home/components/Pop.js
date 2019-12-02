import React from "react";
import styled from "styled-components";
import ListItemInPop from "./ListItemInPop";
import {Link} from "react-router-dom";
import PlaceHolderInPop from "./PlaceHolderInPop"
import getPadding from "../../../utils/getPadding";

const Pop = ({itemsInPop, stateOfPop, removeFromComparison, clearComparison, hidePop}) => {
    //一些东西可以简化代码！！！
    const compareUrl = itemsInPop.reduce(
        (previousValue, item, index) => (
            index === 0 ? previousValue + "/compare/" + item.id :
            previousValue + "-" + item.id
        ),
    "");

    const result = (
            <PopWrapper>
                <UpperRow>
                    <Tab>对比栏</Tab>
                    <Padding></Padding>
                    <BtnHide onClick = {hidePop}>隐藏</BtnHide>
                </UpperRow>
                <LowerRow>
                    {itemsInPop.map( item => <ListItemInPop key = {item.id} 
                                                                {...item} 
                                                                removeFromComparison = {removeFromComparison(item.id)}/>)}
                    {getPadding(4, itemsInPop.length + 1, (index) => (<PlaceHolderInPop showNum = {index}/>))}
                    <CompareActiveClear>
                        <CompareBtn to = {compareUrl}>对比</CompareBtn>
                        <ClearBtn onClick = {clearComparison}>清空对比栏</ClearBtn>
                    </CompareActiveClear>
                </LowerRow>
            </PopWrapper>
        )
    return stateOfPop ? result : null;
}

export default Pop;

const PopWrapper = styled.div`
    position: fixed;
    z-index: 100;
    bottom: 10px;
    margin: auto;
    left: 0;
    right: 0;
    box-shadow: 0 0 15px rgba(221,221,221,.8);
    background: #fff;
    width: 970px;
    height: 139px;
    display: flex;
    flex-direction: column;
`
const UpperRow = styled.div`
    flex: 0 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Tab = styled.div`
    flex:0 84px;
    height: 38px;
    margin-top: -4px;
    border: 2px solid #7abd54;
    border-bottom: 0;
    line-height: 36px;
    background: #fff;
    text-align: center;
    font-size: 15px;
    color: #7abd54
    cursor: pointer;
`
const Padding = styled.div`
    flex: 1 1px;
    height: 100%;
    border-bottom: 2px solid #7abd54;
    border-top: 1px solid #ccc;
`
const BtnHide = styled.div`
    height: 100%
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 2px solid #7abd54;
    line-height: 32px;
    flex: 0 80px;
    text-align: center;
    font-size: 12px;
    color: #005aa0;
    cursor: pointer;
`
const LowerRow = styled.div`
    border: 2px solid #7abd54;
    border-top: 0;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 6px; 
`
const CompareActiveClear = styled.div`
    flex: 1;
    height: 100%;
    padding: 14px 0 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const CompareBtn = styled(Link)`
    text-decoration: none;
    display: block;
    width: 59px;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    color: #fff;
    background-color: #E74649;
    text-align: center;
    cursor: pointer;
`
const ClearBtn = styled.div`
    text-align: center;
    font-size: 12px;
    color: #005aa0;
    cursor: pointer; 
`
