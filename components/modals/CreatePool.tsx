import React, { useState, useEffect } from "react";

import { Button, Modal, Box, Typography, Container } from "@mui/material";
import abis from "../../abi";
import { ethers } from "ethers";

export interface CreatePoolProps {
  open: boolean;
  handleClose: any;
}

export const CreatePoolModal = ({ open, handleClose }: CreatePoolProps) => {
  const bondAbi = abis.poolFactory;

  const submitLend = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        // Bonds have a decimal place of 6 so we need to covert. TODO Maybe fetch the decimal place in the future
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const poolContract = new ethers.Contract(
          lendDetails.address,
          bondAbi,
          signer
        );

        const createBondTxn = await poolContract.purchaseBond(
          convertedAmountLend,
          {
            gasPrice: ethers.utils.parseUnits("100", "gwei"),
            gasLimit: 500000,
          }
        );
        console.log("Mining...", createBondTxn.hash);
        await createBondTxn.wait();

        console.log(
          "Mined -- Success ",
          createBondTxn.hash + "Mined -- Success ERC20"
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "bg-white",
    p: 4,
  } as React.CSSProperties;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={style}
          className="bg-white rounded-xl shadow-lg p-8 justify-center flex-wrap"
        >
          <div className="text-xl">Create New Pool</div>
          <div>
            Pool Name <input></input>
          </div>
          <div>Amount</div>
          <input></input> ETH
          <div>Pool Description</div>
          <input className="w-50 h-50"></input>
          <div>Pool End Date</div>
          <input></input>
          <div></div>
          <Button
            variant="contained"
            color="primary"
            className="w-40 flex-wrap"
          >
            {" "}
            Create Pool
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CreatePoolModal;
