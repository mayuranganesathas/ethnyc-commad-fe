import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navfoot/Navbar";

export default function Home() {
  return (
    <div>
      <NavBar /> <img src="./home.png" className="w-full px-24"></img>
      <div className="flex justify-center space-x-10">
        {" "}
        <Button variant="contained" color="primary" className="w-full h-full ">
          Grow Your Community
        </Button>
        <Button variant="contained" color="primary" className="w-full h-full">
          Create and Earn
        </Button>
      </div>
    </div>
  );
}
