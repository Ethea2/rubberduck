"use client";

import Link from "next/link";
import { useState } from "react";
import CreateEntry from "./CreateEntry";

const DashboardContents = ({ user }: { user: string }) => {
    const [isCreateClicked, setIsCreateClicked] = useState(false);

    const handleCreateClick = () => {
        setIsCreateClicked(true);
    };

    const handleCloseCreate = () => {
        setIsCreateClicked(false);
    };
    return (
        <div className="relative w-full h-full flex justify-center">
            <div className="w-[80%]">
                <div className="w-full py-6 flex items-center justify-between">
                    <div>
                        <h1>Date today</h1>
                        <h3 className="">
                            Hey{" "}
                            <span className="text-[#FFBD69] font-bold">
                                {user}
                            </span>
                            ! What's new today?
                        </h3>
                    </div>
                    <button
                        className="px-8 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-[#D9D9D9] to-[#395B64] uppercase"
                        onClick={handleCreateClick}
                    >
                        Create New Entry
                    </button>
                </div>
                <hr className="border"></hr>
                {isCreateClicked ? (
                    <CreateEntry user={user} handleClose={handleCloseCreate} />
                ) : null}
            </div>
        </div>
    );
};

export default DashboardContents;
