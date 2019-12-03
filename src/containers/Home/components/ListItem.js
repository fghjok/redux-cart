import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actions as homeActions } from "../../../redux/modules/home";

const ListItem = ({ 
    id,
    bigimg,
    longdiscription,
    price,
    addToCartById,
    itemsInPop,
    checkCheckBox,
    uncheckCheckBox
}) => {
    const pid = id;
    const checked = itemsInPop.includes(pid);
    const onChange = itemsInPop.includes(pid)?uncheckCheckBox(pid):checkCheckBox(pid);
    const checkedSVG = <svg t="1575106275855" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13986" width="15" height="15"><path d="M0 0m83.900041 0l856.199918 0q83.900041 0 83.900041 83.900041l0 856.199918q0 83.900041-83.900041 83.900041l-856.199918 0q-83.900041 0-83.900041-83.900041l0-856.199918q0-83.900041 83.900041-83.900041Z" fill="#4D86FF" p-id="13987"></path><path d="M517.873003 710.77318l-59.988529 59.77878-10.277755 10.277755-281.065138-281.204971 69.916701-69.916701 211.148437 210.798853 382.444353-382.444353 69.916701 69.9167z" fill="#FFFFFF" p-id="13988"></path></svg>
    const checkBox = checked ? checkedSVG : <CheckBoxUnchecked></CheckBoxUnchecked>
    return (
            <Wrapper>
            <Pic src={bigimg} />
            <Info>
                <TwoLines>{longdiscription}</TwoLines>
                <Price>{price}</Price>
                <LowerWrapper>
                    <AddToCartButton onClick={addToCartById}>
                        Add to Cart
                    </AddToCartButton>
                    <CompareWrapper onClick = {onChange}>
                        {checkBox}
                        <Label>对比</Label>
                    </CompareWrapper>
                </LowerWrapper>
            </Info>
            </Wrapper>
    )
};


function mapStateToProps(state) {
    const itemsInPop = state.home.comparativeItems.itemsInPop;
    return { itemsInPop };
}

function mapDispatchToProps(dispatch) {
    return {
        checkCheckBox: id => () => homeActions.checkCheckBox(dispatch)(id),
        uncheckCheckBox: id => () => homeActions.uncheckCheckBox(dispatch)(id),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem);


const Wrapper = styled.div`
    padding: 12px 32px 12px 32px;
    cursor: pointer;
`;

const Pic = styled.img`
    width: 160px;
    height: 160px;
    margin: 0 auto;
    display: block;
    border: 0;
    :hover {
    opacity: 0.7;
    }
`;
const Info = styled.div`
    margin-top: 10px;
`;
const TwoLines = styled.div`
    height: 36px;
    font-size: 14px;
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #666;
    :hover {
        color: #f02b2b;
    }
`;
const Price = styled.div`
    margin-top: 5px;
    color: #f02b2b;
    font-size: 19px;
`;
const LowerWrapper = styled.div`
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
`;
const AddToCartButton = styled.button`
    border-radius: 4px;
    height: 25px;
    width: 90px;
    background-color: #f02b2b;
    color: azure;
`;

const CompareWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 24px;
    width: 60px;
    border: 1px solid #999999;
    color: #999999; 
`
const CheckBoxUnchecked = styled.div`
    width: 15px;
    height: 15px;
    border: 1px solid #999999;
`

const Label = styled.div`
    font-size: 13px;
`


