import React from "react";
import ListItem from "../components/ListItem";
import { Spinner } from "@chakra-ui/core";
import styled from "styled-components";

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
  background-image: url("http://39.108.102.200/static/bike.jpg");
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
const Spinner_Containner = styled.div`
  display: flex;
  justify-content: center;
`;

class MainBox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onRequest } = this.props;
    onRequest();
  }

  render() {
    const { items, isFetching, onAddToCart } = this.props;
    return (
      <Wrapper>
        <Slogan>
          Shop curated brands and city essentials, all in one place
        </Slogan>
        <Container>
          {items.map(item => (
            <ListItem
              key={item.id}
              {...item}
              addToCartById={onAddToCart(item.id)}
            />
          ))}
        </Container>
        {isFetching ? (
          <Spinner_Containner>
            <Spinner size="xl" speed="0.5s" color="red.500" />
          </Spinner_Containner>
        ) : (
          false
        )}
      </Wrapper>
    );
  }
}

export default MainBox;
