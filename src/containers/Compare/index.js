import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {connect} from "react-redux"
import { actions as compareActions } from "../../redux/modules/compare";
import styled from "styled-components";
import { Spinner } from "@chakra-ui/core";
import Slogan from "./components/Slogan";
import IntroductionTable from "./components/IntroductionTable";
import CommonItemsTable from "./components/CommonItemsTable";
import SpecificItemsTable from "./components/SpecificItemsTable";
import getIds from "../../utils/getIds";

class Compare extends Component {
    constructor(props) {
        super(props);
        this.state = {error: ""}
    }

    componentDidMount() {
        try{
            let ids = getIds(this.props.match.params.ids);
            this.props.getUrlParams(ids);
            this.props.fetchComparativeResult(ids);
        }catch(e){
            this.setState((state, props) => ({ error: "not match!" }));
        }
        
    }

    render() {
        if (this.state.error !== "" || this.props.comparativeResult.error !== "") {
            return <Redirect to="/" />
        }
        let Fetching = this.props.comparativeResult.isFetching ? (
            <SpinnerBox>
                <Spinner size="xl" speed="0.5s" color="red.500" />
            </SpinnerBox>
        ) : 
            false;

        return (
            <Wrapper>
                <Slogan>Shop curated brands and city essentials, all in one place</Slogan>
                <IntroductionTable/>
                <CommonItemsTable /> 
                <SpecificItemsTable />
                {Fetching}
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
    const comparativeResult = state.compare.comparativeResult;
    return { comparativeResult }
}

function mapDispatchToProps(dispatch){
    return {
        fetchComparativeResult:  (ids) => (dispatch(compareActions.fetchComparativeResult(ids))),
        getUrlParams: (params) => (dispatch(compareActions.getUrlParams(params)))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Compare);


const Wrapper = styled.div`
    margin-top: 0rem;
    min-height: 100vh;
    font-family: Bloomfield, Helvetica Neue, Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    background-color: #ffffff;
`;

const SpinnerBox = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;