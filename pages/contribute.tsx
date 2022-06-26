import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navfoot/Navbar";
import RewardBox from "../components/ui/RewardBlock";
import TableDataPoolsYourPosts from "../components/ui/TableDataPoolsYourPosts";

export default function Contribute() {
  return (
    <div className="">
      {" "}
      <NavBar />{" "}
      <div className="flex text-center px-40 py-8">
        {" "}
        <div>
          {" "}
          <div className="text-2xl  py-4">Metrics</div>
          <div className="flex px-8 space-x-8">
            <RewardBox title="Available Rewards" value={0.02} button={true} />{" "}
            <RewardBox title="Total Rewards" value={0.05} button={false} />{" "}
          </div>
        </div>
        <div>
          {" "}
          <div className="text-2xl px-12 py-4">Pool Analysis</div>
          <img src="./pi_chart.png" className="w-10/12"></img>
        </div>
      </div>
      <div className="text-2xl px-12 py-4">Ongoing Pools</div>
      <div className="flex justify-between py-4">
        {" "}
        <div className="text-2xl px-12 py-4">Your Posts</div>
        <button className="bg-primary text-white rounded-xl  h-8 mt-6 mr-20 text-md">
          + Submit New Post
        </button>{" "}
      </div>
      <div className=" pl-64 w-10/12">
        {" "}
        <TableDataPoolsYourPosts />
      </div>
    </div>
  );
}
