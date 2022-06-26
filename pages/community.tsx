import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navfoot/Navbar";
import Box from "../components/ui/Box";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { PlusCircleIcon } from "@heroicons/react/solid";
import TableDataPools from "../components/ui/TableDataPools";
import TableDataPoolsCommunity from "../components/ui/TableDataPoolsCommunity";
import CreatePoolModal from "../components/modals/CreatePool";

export default function CommunityPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <div>
      {" "}
      <NavBar />
      <div>
        <div className="flex justify-between">
          <div className="text-2xl px-12 py-4">Metrics</div>
          <div className="flex px-8 py-12">
            <div className="px-4">
              {" "}
              <ChevronDownIcon className="h-4 w-4" /> Last 7 Days{" "}
            </div>
            <div>
              <ChevronDownIcon className="h-4 w-4" />
              All Pools
            </div>
          </div>
        </div>
        <div className="flex justify-evenly">
          <Box headingText="10,453" subText="Impressions" />
          <Box headingText="59" subText="Shares" />
          <Box headingText="125" subText="Comments" />
          <Box headingText="12,371" subText="Impressions" />
        </div>
      </div>
      <div>
        <div className="flex justify-between py-4">
          {" "}
          <div className="text-2xl px-12 py-4">Pools</div>
          <button
            className="bg-primary text-white rounded-xl  h-8 mt-6 mr-20 text-md"
            onClick={() => setModalOpen(true)}
          >
            + New Pool
          </button>
        </div>
        <div className=" pl-64 w-10/12">
          <TableDataPools />
        </div>
      </div>
      <div className="flex justify-between py-4">
        {" "}
        <div className="text-2xl px-12 py-4">Community</div>
        <div className="text-primary  h-8 mt-10 mr-20 text-md">
          <PlusCircleIcon className="h-4 w-4 text-primary text-sm" /> Add To
          Blacklist
        </div>
      </div>{" "}
      <div className=" pl-64 w-10/12">
        <TableDataPoolsCommunity />
      </div>
      <CreatePoolModal open={modalOpen} handleClose={handleClose} />
    </div>
  );
}
