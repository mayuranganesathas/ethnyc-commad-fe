import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navfoot/Navbar";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <NavBar />{" "}
      <img src="./home.png" className="w-full px-24 hover:cursor-pointer"></img>
      <div className="flex justify-center space-x-10">
        {" "}
        <Button
          variant="contained"
          color="primary"
          className="w-full h-full "
          onClick={() => router.push("./community")}
        >
          Grow Your Community
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="w-full h-full hover:cursor-pointer"
          onClick={() => router.push("./contribute")}
        >
          Create and Earn
        </Button>
      </div>
    </div>
  );
}
