import React, { FC, useMemo } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  SolflareWalletAdapter,
  PhantomWalletAdapter,
  /* ... other adapters ... */
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

import Signin from "./pages/Signin";
import FarmerData from "./pages/farmerdata/FarmerData";
import About from "./pages/About";
import Form from "./pages/Form";
import Dashboard from "./pages/Dashboard";
import Root from "./pages/routes/root";
import ErrorPage from "./error-page";
import Home from "./pages/routes/home";
import MyFirstForm from "./pages/MyFirstForm";
import Farmer from "../src/pages/Farmer";
import Farm from "../src/pages/Farm";
import Profile from "../src/pages/Profile";
function App() {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [new SolflareWalletAdapter(), new PhantomWalletAdapter()],
    [network]
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/formdata",
          element: <Form />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/farmer",
          element: <Farmer />,
        },
        {
          path: "/farm",
          element: <Farm />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <RouterProvider router={router} />
          {/* Your app's components go here, nested within the context providers. */}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
