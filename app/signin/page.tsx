"use client";

import Link from "next/link";
import { useState, ChangeEvent } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignIn = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const router = useRouter();

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            const res: SignInResponse | undefined = await signIn(
                "credentials",
                {
                    email,
                    password,
                    redirect: false,
                }
            );

            if (res?.error !== null) {
                setError(res?.error as string);
            } else if (res?.error === null) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="w-full h-screen flex justify-center items-center">
            <div className="w-[40%] flex flex-col text-white">
                <div className="px-6 py-2 flex items-center justify-between bg-[#323643] rounded-t-lg">
                    <div>
                        <h3>Rubberduck</h3>
                    </div>
                    <div className="flex gap-1.5">
                        <CiFaceSmile />
                        <CiFaceSmile />
                        <CiFaceSmile />
                    </div>
                </div>
                <div className="p-20 flex flex-col gap-6 bg-gradient-to-b to-[#2C3333] from-[#1E1E1E] rounded-b-lg">
                    <div className="pb-1.5 flex gap-4 border-b-2 border-white bg-inherit">
                        <p>Email</p>
                        <input
                            type="text"
                            required={true}
                            className="flex-grow bg-inherit focus:outline-none"
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="pb-1.5 flex gap-4 border-b-2 border-white bg-inherit">
                        <p>Password</p>
                        <input
                            type="password"
                            required={true}
                            className="flex-grow bg-inherit focus:outline-none"
                            onChange={handlePasswordChange}
                        />
                    </div>

                    {error && <div>{error}</div>}

                    <div className="flex justify-end items-center gap-8">
                        <button
                            className="text-[#FFBD69] uppercase"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Login
                        </button>
                        <Link href="/signup">
                            <button className="transition-transform transform origin-center ease-in duration-70 hover:scale-110 uppercase">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignIn;
