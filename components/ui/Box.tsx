import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

export interface BoxProps {
  headingText: string;
  subText: string;
}

const Box = ({ headingText, subText }: BoxProps) => {
  return (
    <div>
      <div className="bg-violet-50 flex-wrap text-center py-12 justify-center rounded-lg w-60 h-40">
        <div className="text-4xl font-bold">{headingText}</div>
        <div className="text-sm py-4">{subText}</div>
      </div>
    </div>
  );
};

export default Box;
