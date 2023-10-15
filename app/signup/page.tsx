"use client";

import useRegister from "@/hooks/useRegister";
import { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import { CiFaceSmile } from "react-icons/ci";

const SignUp = () => {
    const { signup } = useRegister();

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (
        username: string,
        email: string,
        password: string
    ) => {
        signup(username, email, password);
    };

    return (
        <main className="w-full h-screen flex justify-center items-center">
            <div className="w-[40%] flex flex-col text-white">
                <div className="px-6 py-2 flex justify-between items-center bg-[#323643] rounded-t-lg">
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
                        <p className="font-bold">Username</p>
                        <input
                            type="text"
                            required={true}
                            className="flex-grow bg-inherit focus:outline-none"
                            onChange={handleUsernameChange}
                            value={username}
                        />
                    </div>
                    <div className="pb-1.5 flex gap-4 border-b-2 border-white bg-inherit">
                        <p className="font-bold">Email</p>
                        <input
                            type="text"
                            required={true}
                            className="flex-grow bg-inherit focus:outline-none"
                            onChange={handleEmailChange}
                            value={email}
                        />
                    </div>
                    <div className="pb-1.5 flex flex gap-4 border-b-2 border-white bg-inherit">
                        <p className="font-bold">Password</p>
                        <input
                            type="password"
                            required={true}
                            className="flex-grow bg-inherit focus:outline-none"
                            onChange={handlePasswordChange}
                            value={password}
                        />
                    </div>
                    <div className="flex justify-center items-center gap-8">
                        <button
                            className="mt-8 py-2 px-4 bg-gradient-to-r to-[#395B64] from-[#D9D9D9] text-white font-bold rounded-md transition-transform transform origin-start ease-in duration-70 hover:scale-105"
                            onClick={(e) =>
                                handleSubmit(username, email, password)
                            }
                        >
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUp;
