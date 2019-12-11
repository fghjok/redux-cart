import React from "react";
import styled from "styled-components";

const Badge = ({ number }) =>
    number > 0 ? <BadgeDiv>{number}</BadgeDiv> : false;

export default Badge;

const BadgeDiv = styled.div`
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    background-color: coral;
    color: darkgreen;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
    position: absolute;
    top: 5px;
    right: 5px;
`;
