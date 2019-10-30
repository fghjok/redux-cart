import React from "react";
import styled from "styled-components";

const Cart = styled.a`
  -moz-box-align: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  width: 96px;
`;

const CartButton = ({ open }) => (
  <Cart onClick={open}>
    <svg
      t="1570175436718"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3120"
      width="80"
      height="80"
    >
      <path
        d="M816.4 886.2H342.8V707.9h47.3v130.9h426.3z"
        fill="#B0BEC5"
        p-id="3121"
      ></path>
      <path
        d="M366.4 862.5m-75.8 0a75.8 75.8 0 1 0 151.6 0 75.8 75.8 0 1 0-151.6 0Z"
        fill="#455A64"
        p-id="3122"
      ></path>
      <path
        d="M366.4 862.5m-40.5 0a40.5 40.5 0 1 0 81 0 40.5 40.5 0 1 0-81 0Z"
        fill="#263238"
        p-id="3123"
      ></path>
      <path
        d="M816.4 862.5m-75.8 0a75.8 75.8 0 1 0 151.6 0 75.8 75.8 0 1 0-151.6 0Z"
        fill="#455A64"
        p-id="3124"
      ></path>
      <path
        d="M816.4 862.5m-40.5 0a40.5 40.5 0 1 0 81 0 40.5 40.5 0 1 0-81 0Z"
        fill="#263238"
        p-id="3125"
      ></path>
      <path
        d="M223.3 390.5c-13.2 0-25-9.2-27.8-22.6l-46.2-220.4c-1.2-4-5-6.8-9.2-6.8l-102.3-1.2c-15.7-0.2-28.2-13-28.1-28.7 0.2-15.7 13-28.2 28.7-28.1l101.9 1.2c30 0 56.5 20.5 64 49.9l0.3 1.3 46.3 221.2c3.2 15.4-6.6 30.4-22 33.6-1.7 0.4-3.7 0.6-5.6 0.6z"
        fill="#455A64"
        p-id="3126"
      ></path>
      <path
        d="M870.8 707.9H325.3c-17.1 0-31.8-12-35.3-28.7l-88-419h747.7c22.9 0 40.1 21.1 35.3 43.5l-78.9 375.4c-3.5 16.8-18.2 28.8-35.3 28.8z"
        fill="#ECEFF1"
        p-id="3127"
      ></path>
      <path
        d="M382.9 707.9L364 682.5 782.4 452l134.8 180.3-20 64z"
        fill="#DADEE0"
        p-id="3128"
      ></path>
      <path
        d="M870.8 736.3H325.3c-30.3 0-56.9-21.6-63.1-51.2L167 231.8h782.7c19.5 0 37.8 8.7 50.1 23.9 12.3 15.2 17.1 34.8 13 53.9L933.9 685c-6.2 29.7-32.8 51.3-63.1 51.3zM236.9 288.6l80.8 384.7c0.7 3.6 3.9 6.1 7.5 6.1h545.5c3.6 0 6.8-2.6 7.5-6.1l78.9-375.4c0.7-3.1-0.7-5.4-1.6-6.4-0.9-1.1-2.8-2.9-6-2.9H236.9z"
        fill="#CFD8DC"
        p-id="3129"
      ></path>
      <path
        d="M616.1 682.1H364V549.7c0-10.5 8.5-18.9 18.9-18.9h233.2v151.3z"
        fill="#2196F3"
        p-id="3130"
      ></path>
      <path
        d="M616.1 530.7H439.8V398.3c0-10.5 8.5-18.9 18.9-18.9h138.5c10.5 0 18.9 8.5 18.9 18.9v132.4z"
        fill="#FFCA28"
        p-id="3131"
      ></path>
      <path
        d="M787.5 682.1H616.1V445.7h152.5c10.5 0 18.9 8.5 18.9 18.9v217.5z"
        fill="#4CAF50"
        p-id="3132"
      ></path>
    </svg>
  </Cart>
);

export default CartButton;
