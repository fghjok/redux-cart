import React from "react";
import styled from "styled-components";

class ListItemInPop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDeleteBtn: false};
        this.overShow = this.overShow.bind(this);
        this.outHide = this.outHide.bind(this);
    }

    overShow() {
        this.setState(state => ({
            showDeleteBtn: true
        }));
    }

    outHide() {
        this.setState(state => ({
            showDeleteBtn: false
        }));
    }

    render() {
        const { bigimg, longdiscription, price, removeFromComparison } = this.props;
        let deleteBtn = this.state.showDeleteBtn ? <Delete onClick = {removeFromComparison}>删除</Delete> : null;
        const result = (
            <Wrapper onMouseOver = {this.overShow} onMouseOut = {this.outHide}>
                <PicWrapper>
                    <Pic src = {bigimg}/>
                </PicWrapper>
                <RightColumn>
                    <Discription>{longdiscription}</Discription>
                    <Price>{price}</Price>
                    {deleteBtn}
                </RightColumn>
            </Wrapper>
        );
        return result;
    }

}

export default ListItemInPop;

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
const PicWrapper = styled.div`
    flex: 0 54px;
    height: 100%;
`
const Pic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const RightColumn = styled.div`
    flex: 1;
    height: 100%;
    padding-left: 6px;
    display: flex;
    flex-flow: row wrap;
`
const Discription = styled.div`
    width: 100%;
    height: 36px;
    font-size: 12px;
    line-height: 18px;
    overflow: hidden;
`
const Price = styled.strong`
    color: #e4393c;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
`
const Delete = styled.a`
    color: #005aa0;
    font-size: 12px;
    line-height: 18px;
    padding-left: 55px;
    cursor: pointer;
`
