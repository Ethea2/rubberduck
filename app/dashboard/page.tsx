"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast, Id } from "react-toastify";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const toastID = useRef<Id>();

    useEffect(() => {
        if (status !== "loading") {
            if (status === "unauthenticated") {
                toast.update(toastID.current ?? "", {
                    render: "Invalid Credentials",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "error",
                    isLoading: false,
                });
                router.push("/signin");
            }
        }
    }, [status]);
    return (
        <div className="w-full min-h-screen flex bg-inherit">
            {status === "loading" ? (
                <span className="loading loading-spinner loading-xs m-auto"></span>
            ) : (
                <Navbar data={session?.user?.name as string} />
            )}
        </div>
    );
};

export default Dashboard;
