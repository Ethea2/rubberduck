"use client";

import { GiPlasticDuck } from "react-icons/gi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast, Id } from "react-toastify";
import { signOut } from "next-auth/react";
import Image from "next/image";
import rubberduckLogo from "@/public/rubberduckLogo.png";

const Navbar = ({ data }: { data: string }) => {
    return (
        <div className="w-full h-fit p-4 flex justify-between items-center bg-[#1E2022]/50 text-white border-b-2 border-[#52616B]">
            <div className="flex items-center gap-4">
                <Image
                    src={rubberduckLogo}
                    width={40}
                    height={40}
                    alt="Picture of the author"
                />
                <h1>RUBBERDUCK</h1>
            </div>

            <div className="flex gap-8">
                <p>{data}</p>
                <button
                    className=""
                    onClick={() => signOut({ callbackUrl: "/signin" })}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;
