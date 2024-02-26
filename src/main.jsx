import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme.jsx";
import App from "./App.jsx";
import 'swiper/css';
import { Web3ReactProvider, Web3ReactHooks } from '@web3-react/core';
import { Connector } from '@web3-react/types';
import allConnections from '../connectors';

const connections = allConnections.map(([connector, hooks]) => [connector, hooks]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Web3ReactProvider connectors={connections}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Web3ReactProvider>
);
