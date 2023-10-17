// import Image from "next/Image";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();
    return (
        <main className="">
            <p>Signed in as {session?.user?.name}</p>
        </main>
    );
}
