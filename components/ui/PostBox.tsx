import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

export interface PostBoxProps {
  headingText: string;
  bodyText: string;
  imgLink: string;
  name: string;
  date: string;
}

const PostBox = ({
  headingText,
  bodyText,
  imgLink,
  name,
  date,
}: PostBoxProps) => {
  return (
    <div>
      <div className=" w-80 h-30 shadow-xl rounded-xl">
        <div className="font-bold p-2"> {headingText}</div>
        <div>{bodyText} </div>
        <div className="flex p-2 ">
          <div className="flex p-2">
            <img src={imgLink} className="w-12 rounded-xl "></img>
            <div>
              <div>{name}</div>
              <div>{date}</div>
            </div>
          </div>
          <Button variant="contained" color="primary" className="w-36 h-5 ">
            + Submit Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
