import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import WalletContextProvider from './components/WalletContextProvider'
import theme from "./theme/theme.jsx";
import App from "./App.jsx";
import 'swiper/css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <WalletContextProvider>
      <App />
      </WalletContextProvider>
  </React.StrictMode>
);
