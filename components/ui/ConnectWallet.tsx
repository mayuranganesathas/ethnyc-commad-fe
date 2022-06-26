import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

export interface ConnectWalletProps {
  connectWallet: () => void;
  disconnectWallet: () => void;
  web3Provider: boolean;
}

const ConnectWalletButton = ({
  connectWallet,
  disconnectWallet,
  web3Provider,
}: ConnectWalletProps) => {
  return (
    // TODO : FIX COLORING
    <div>
      {web3Provider ? (
        <button
          className="text-white border-textandcta bg-textandcta  p-4 text-lg rounded-full hover:bg-white hover:text-textandcta	 hover:cursor-pointer"
          onClick={() => disconnectWallet()}
        >
          {" "}
          Disconnect Wallet
        </button>
      ) : (
        <button
          className="bg-white text-textandcta  border-textandcta  p-4 text-lg  rounded-full hover:bg-secondary hover:text-white hover:cursor-pointer"
          onClick={() => connectWallet()}
        >
          {" "}
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWalletButton;
