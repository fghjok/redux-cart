import React from "react";
import ListItem from "./ListItem";
import { Spinner } from "@chakra-ui/core";
import styled from "styled-components";
import { connect } from "react-redux";
import { actions as homeActions } from "../../../../redux/modules/home";

class ProductList extends React.Component {
    componentDidMount() {
        const { loadProducts } = this.props;
        loadProducts();
    }

    render() {
        const { items, isFetching, addToCart } = this.props;
        const list = items.map(item => (
            <ListItem
                key={item.id}
                {...item}
                addToCartById={addToCart(item.id)}
            />
        ));
        const Fetching = isFetching ?
            <SpinnerBox>
                <Spinner size="xl" speed="0.5s" color="red.500" />
            </SpinnerBox>
        : 
            false;
        
        return (
            <Wrapper>
                <Slogan>
                    Shop curated brands and city essentials, all in one place
                </Slogan>
                <Container>
                    {list}
                </Container>
                {Fetching}
            </Wrapper>
        );
    }
}

function mapStateToProps(state) {
    const items = state.home.products.items;
    const isFetching = state.home.products.isFetching;
    return { items, isFetching, };
}
  
function mapDispatchToProps(dispatch) {
    return {
        addToCart: id => () => dispatch(homeActions.addToCart(id)),
        loadProducts: () => dispatch(homeActions.loadProducts()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);

const Wrapper = styled.div`
    margin-top: 0rem;
    min-height: 100vh;
    font-family: Bloomfield, Helvetica Neue, Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
`;
const Slogan = styled.div`
    width: 1200px;
    font-size: 36px;
    letter-spacing: -2px;
    line-height: 40px;
    font-weight: 700;
    box-sizing: border-box;
    text-align: center;
    font-family: Bloomfield, Helvetica Neue, Helvetica, Arial, sans-serif;
    color: #ffffff;
    background-image: url("/static/img/bike.webp");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: fill;
    padding-top: 130px;
    padding-bottom: 130px;
`;
const Container = styled.div`
    width: 1200px;
    background: rgb(255, 255, 255);
    margin: 2em auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 300px;
    grid-gap: 20px;
`;
const SpinnerBox = styled.div`
    display: flex;
    justify-content: center;
`;

