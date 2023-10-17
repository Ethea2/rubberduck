"use client";
import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status !== "loading") {
            if (status === "unauthenticated") {
                router.push("/signin");
            }
        }
    }, [status]);

    return (
        <main className="">
            <p>
                Signed in as{" "}
                {status === "loading" ? "Loading..." : session?.user?.name}
            </p>
            <button
                className="w-fit p-4 bg-emerald-400 text-black text-2xl rounded-md font-bold"
                onClick={() => signOut({ callbackUrl: "/signin" })}
            >
                logout
            </button>
        </main>
    );
}
