import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useWalletAuth } from "../../lib/WalletContext";
import ConnectWallet from "../ui/ConnectWallet";

export const NavBar = () => {
  // ---------------------------
  // Wallet related
  // ---------------------------
  const { connect, disconnect, web3Provider } = useWalletAuth();
  //navbar alignment still funky
  return (
    <div className="flex justify-between bg-primary px-36  ">
      <img src="logo.png" alt="logo" className="w-48 h-12 mt-8" />
      <div className="flex py-6">
        <ConnectWallet
          connectWallet={connect}
          disconnectWallet={disconnect}
          web3Provider={web3Provider}
        />{" "}
      </div>
    </div>
  );
};
