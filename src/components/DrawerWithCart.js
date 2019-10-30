import React from "react";
import ListItemInCart from "../components/ListItemInCart";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/core";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0px;
  padding: 0px;
  color: rgb(51, 51, 51);
  font-size: 16px;
  background: #f4f4f4;
`;
const Header = styled.div`
  height: 66px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  position: fixed;
  top: 0;
`;
const Title = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 66px;
  height: 100%;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 100%;
`;
const Text = styled.h2`
  font-size: 25px;
`;
const List_Wrapper = styled.div`
  margin-top: 83px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  padding-top: 50px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 25px;
  width: 97%;
`;
const Checkout_Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 85px;
  display: flex;
  width: 100%;
  box-shadow: rgb(231, 231, 231) -3px 0px 3px 0px;
  background-color: #fff;
`;
const Checkout_Inner_Left = styled.div`
  flex-grow: 1;
  align-items: center;
  display: flex;
`;
const Checkout_Inner_Right = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  height: 100%;
`;
const Total = styled.div`
  font-size: 18px;
`;
const Total_Number = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
const Pay_Button = styled.div`
  width: 97%;
  height: 50px;
  background-color: rgb(80, 1, 145);
  color: #ffffff;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;

const DrawerWithCart = ({
  stateOfDrawer,
  ItemsInCart,
  payment,
  onClose,
  onAddOne,
  onMinusOne,
  onCheckOut,
  onRemove
}) => (
  <Drawer
    isOpen={stateOfDrawer}
    placement="right"
    onClose={onClose}
    size="lg"
    scrollBehavior="inside"
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerBody>
        <Wrapper>
          <Header>
            <Title>
              <Text>Cart</Text>
            </Title>
            <Icon>
              <svg
                t="1570110081465"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4131"
                width="48"
                height="48"
              >
                <path
                  d="M816.4 886.2H342.8V707.9h47.3v130.9h426.3z"
                  fill="#B0BEC5"
                  p-id="4132"
                ></path>
                <path
                  d="M366.4 862.5m-75.8 0a75.8 75.8 0 1 0 151.6 0 75.8 75.8 0 1 0-151.6 0Z"
                  fill="#455A64"
                  p-id="4133"
                ></path>
                <path
                  d="M366.4 862.5m-40.5 0a40.5 40.5 0 1 0 81 0 40.5 40.5 0 1 0-81 0Z"
                  fill="#263238"
                  p-id="4134"
                ></path>
                <path
                  d="M816.4 862.5m-75.8 0a75.8 75.8 0 1 0 151.6 0 75.8 75.8 0 1 0-151.6 0Z"
                  fill="#455A64"
                  p-id="4135"
                ></path>
                <path
                  d="M816.4 862.5m-40.5 0a40.5 40.5 0 1 0 81 0 40.5 40.5 0 1 0-81 0Z"
                  fill="#263238"
                  p-id="4136"
                ></path>
                <path
                  d="M223.3 390.5c-13.2 0-25-9.2-27.8-22.6l-46.2-220.4c-1.2-4-5-6.8-9.2-6.8l-102.3-1.2c-15.7-0.2-28.2-13-28.1-28.7 0.2-15.7 13-28.2 28.7-28.1l101.9 1.2c30 0 56.5 20.5 64 49.9l0.3 1.3 46.3 221.2c3.2 15.4-6.6 30.4-22 33.6-1.7 0.4-3.7 0.6-5.6 0.6z"
                  fill="#455A64"
                  p-id="4137"
                ></path>
                <path
                  d="M870.8 707.9H325.3c-17.1 0-31.8-12-35.3-28.7l-88-419h747.7c22.9 0 40.1 21.1 35.3 43.5l-78.9 375.4c-3.5 16.8-18.2 28.8-35.3 28.8z"
                  fill="#ECEFF1"
                  p-id="4138"
                ></path>
                <path
                  d="M382.9 707.9L364 682.5 782.4 452l134.8 180.3-20 64z"
                  fill="#DADEE0"
                  p-id="4139"
                ></path>
                <path
                  d="M870.8 736.3H325.3c-30.3 0-56.9-21.6-63.1-51.2L167 231.8h782.7c19.5 0 37.8 8.7 50.1 23.9 12.3 15.2 17.1 34.8 13 53.9L933.9 685c-6.2 29.7-32.8 51.3-63.1 51.3zM236.9 288.6l80.8 384.7c0.7 3.6 3.9 6.1 7.5 6.1h545.5c3.6 0 6.8-2.6 7.5-6.1l78.9-375.4c0.7-3.1-0.7-5.4-1.6-6.4-0.9-1.1-2.8-2.9-6-2.9H236.9z"
                  fill="#CFD8DC"
                  p-id="4140"
                ></path>
                <path
                  d="M616.1 682.1H364V549.7c0-10.5 8.5-18.9 18.9-18.9h233.2v151.3z"
                  fill="#2196F3"
                  p-id="4141"
                ></path>
                <path
                  d="M616.1 530.7H439.8V398.3c0-10.5 8.5-18.9 18.9-18.9h138.5c10.5 0 18.9 8.5 18.9 18.9v132.4z"
                  fill="#FFCA28"
                  p-id="4142"
                ></path>
                <path
                  d="M787.5 682.1H616.1V445.7h152.5c10.5 0 18.9 8.5 18.9 18.9v217.5z"
                  fill="#4CAF50"
                  p-id="4143"
                ></path>
              </svg>
            </Icon>
          </Header>
          <List_Wrapper>
            {ItemsInCart.map(item => (
              <ListItemInCart
                key={item.id}
                {...item}
                addOneById={onAddOne(item.id)}
                minusOneById={onMinusOne(item.id)}
                removeById={onRemove(item.id)}
              />
            ))}
          </List_Wrapper>
          <Checkout_Wrapper>
            <Checkout_Inner_Left>
              <Total>Total:</Total>
              <Total_Number>{payment}</Total_Number>
            </Checkout_Inner_Left>
            <Checkout_Inner_Right>
              <Pay_Button onClick={onCheckOut}>Proceed to Checkout</Pay_Button>
            </Checkout_Inner_Right>
          </Checkout_Wrapper>
        </Wrapper>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default DrawerWithCart;
