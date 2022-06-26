import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

export interface PostBoxProps {
  headingText: string;
  bodyText: string;
  img: string;
  name: string;
  date: string;
}

const PostBox = ({ headingText, bodyText, img, name, date }: PostBoxProps) => {
  return <div></div>;
};

export default PostBox;
