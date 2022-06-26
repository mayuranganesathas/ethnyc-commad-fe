import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";

import { Button, Modal, Box, Typography, Container } from "@mui/material";
import abis from "../../abi";
import { ethers } from "ethers";

export interface CreatePoolProps {
  open: boolean;
  handleClose: any;
}

const defaultValues = {
  name: "new Pool",
  amount: 10,
  desc: "a desc",
  endDate: 1656245931,
};

export const CreatePoolModal = ({ open, handleClose }: CreatePoolProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });
  const poolAbi = abis.poolFactory;

  const submitCreate = async (poolDetails: any) => {
    console.log(poolDetails);
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const poolContract = new ethers.Contract(
          "0xd212e8ca6504A89Ff3268e4E68E8C9291FE92936",
          poolAbi as any,
          signer
        );

        const viralityOracleAddr = "0x9984A54eaf9a48E1E705E2278C2DCd6593DeE71A";
        const createPoolTxn = await poolContract.createPool(
          poolDetails.name,
          poolDetails.amount,
          viralityOracleAddr,
          {
            gasPrice: ethers.utils.parseUnits("100", "gwei"),
            gasLimit: 500000,
          }
        );
        console.log("Mining...", createPoolTxn.hash);
        await createPoolTxn.wait();

        console.log(
          "Mined -- Success ",
          createPoolTxn.hash + "Mined -- Success ERC20"
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = handleSubmit(submitCreate);

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
          <form onSubmit={onSubmit}>
            <div className="text-xl">Create New Pool</div>
            <div>
              Pool Name
              <input {...register("name")}></input>
            </div>
            <div>Amount</div>
            <input {...register("amount")}></input> ETH
            <div>Pool Description</div>
            <input className="w-50 h-50" {...register("desc")}></input>
            <div>Pool End Date</div>
            <input {...register("endDate")}></input>
            <div></div>
            <Button
              variant="contained"
              color="primary"
              className="w-40 flex-wrap"
              type="submit"
            >
              {" "}
              Create Pool
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CreatePoolModal;
