import React from "react";
import ContainerForHeader from "../containers/ContainerForHeader";
import ContainerForMainBox from "../containers/ContainerForMainBox";
import ContainerForDrawerWithCart from "../containers/ContainerForDrawerWithCart";
import { ThemeProvider } from "@chakra-ui/core";
import styled from "styled-components";

const Footer = styled.div`
  color: #666;
  background-color: #eaeaea;
  height: 20px;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
`;

const Github = styled.a`
  position: fixed;
  bottom: 40px;
  right: 7px;
  cursor: pointer;
`;

const App = () => (
  <div>
    <ThemeProvider>
      <ContainerForHeader />
      <ContainerForMainBox />
      <Footer>@NO RIGHTS RESERVED</Footer>
      <Github href="https://github.com/fghjok/redux-cart">
        <svg
          t="1572336511454"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2150"
          width="80"
          height="80"
        >
          <path
            d="M0 0h1024v1024H0z"
            fill="#8a8a8a"
            fill-opacity="0"
            p-id="2151"
          ></path>
          <path
            d="M111.304348 521.572174c0 171.453217 113.574957 316.861217 271.137391 368.194783 19.812174 3.561739 27.046957-8.43687 27.046957-18.699131 0-9.216-0.333913-33.613913-0.534261-66.003478-110.280348 23.440696-133.542957-52.023652-133.542957-52.023652-18.031304-44.833391-44.032-56.765217-44.032-56.765218-35.995826-24.041739 2.738087-23.574261 2.738087-23.574261 39.780174 2.738087 60.727652 40.002783 60.727652 40.002783 35.350261 59.280696 92.783304 42.162087 115.378087 32.211478 3.606261-25.043478 13.846261-42.162087 25.154783-51.867826-88.019478-9.772522-180.580174-43.074783-180.580174-191.75513 0-42.340174 15.449043-77.022609 40.826435-104.114087-4.096-9.794783-17.697391-49.285565 3.895652-102.689392 0 0 33.257739-10.440348 109.011478 39.780174 31.610435-8.614957 65.536-12.911304 99.238957-13.06713 33.680696 0.155826 67.584 4.452174 99.261217 13.06713 75.686957-50.220522 108.900174-39.780174 108.900174-39.780174 21.637565 53.426087 8.036174 92.872348 3.962435 102.689392 25.421913 27.113739 40.737391 61.773913 40.737391 104.114087 0 149.058783-92.694261 181.871304-180.980869 191.465739 14.202435 11.976348 26.89113 35.661913 26.89113 71.858087 0 51.867826-0.489739 93.718261-0.489739 106.429217 0 10.395826 7.145739 22.483478 27.247304 18.67687 157.42887-51.422609 270.914783-196.741565 270.914783-368.128C904.214261 307.289043 726.683826 133.565217 507.725913 133.565217 288.834783 133.565217 111.304348 307.289043 111.304348 521.572174z"
            fill="#8a8a8a"
            p-id="2152"
          ></path>
        </svg>
      </Github>
      <ContainerForDrawerWithCart />
    </ThemeProvider>
  </div>
);

export default App;
