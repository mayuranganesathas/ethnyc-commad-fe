import logoPng from "../../public/Logo_BONDFI.jpg";
import { Container } from "@material-ui/core";
// import ConnectWallet from "../ui/ConnectWallet";
import React, { useEffect, useState } from "react";
// import { useWalletAuth } from "../../lib/walletContext";

export const NavBar = () => {
  // ---------------------------
  // Wallet related
  // ---------------------------
  //   const { connect, disconnect, web3Provider } = useWalletAuth();

  return (
    <Container maxWidth="xl" className=" flex justify-between content-center ">
      <img src="" alt="logo" width="180" height="80" />
      <div className="flex py-6">
        {/* REF WALLET HERE <ConnectWallet
          connectWallet={connect}
          disconnectWallet={disconnect}
          web3Provider={web3Provider}
        />{" "} */}
      </div>
    </Container>
  );
};
