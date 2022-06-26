import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

export interface RewardProps {
  title: string;
  value: number;
  button: boolean;
}

const RewardBox = ({ title, value, button }: RewardProps) => {
  return (
    <div>
      <div className="bg-violet-50 flex-wrap text-center py-12 px-4 justify-center rounded-lg w-60 h-40">
        <div className="text-md font-bold">{title}</div>
        <div className="text-4xl font-bold">{value}</div>
        {button && (
          <Button
            variant="contained"
            color="primary"
            className="text-white w-40"
          >
            {" "}
            Claim Rewards
          </Button>
        )}
      </div>
    </div>
  );
};

export default RewardBox;
