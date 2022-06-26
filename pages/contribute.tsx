import React, { useEffect, useState } from "react";
import SubmitPostModal from "../components/modals/SubmitPost";
import { NavBar } from "../components/navfoot/Navbar";
import PostBox from "../components/ui/PostBox";
import RewardBox from "../components/ui/RewardBlock";
import TableDataPoolsYourPosts from "../components/ui/TableDataPoolsYourPosts";

export default function Contribute() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setModalOpen(false);
  };
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
      <div className="flex justify-evenly">
        <PostBox
          headingText="TEST"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          imgLink="./witch3.png"
          name="Sahsa Bans"
          date="2021 12 31"
        />
        <PostBox
          headingText="TEST"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          imgLink="./boredape.webp"
          name="Sahsa Bans"
          date="2021 12 31"
        />
        <PostBox
          headingText="TEST"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          imgLink="./witch2.png"
          name="Sahsa Bans"
          date="2021 12 31"
        />
      </div>
      <div className="flex justify-between py-4">
        {" "}
        <div className="text-2xl px-12 py-4">Your Posts</div>
        <button
          className="bg-primary text-white rounded-xl  h-8 mt-6 mr-20 text-md"
          onClick={() => setModalOpen(true)}
        >
          + Submit New Post
        </button>{" "}
      </div>
      <div className=" pl-64 w-10/12">
        {" "}
        <TableDataPoolsYourPosts />
      </div>
      <SubmitPostModal open={modalOpen} handleClose={handleClose} />
    </div>
  );
}
