const SignIn = () => {
    return (
        <main className="w-full h-screen flex justify-center items-center">
            <div className="w-[40%] flex flex-col text-white">
                <div className="px-6 py-2 flex justify-between bg-[#323643] rounded-t-lg">
                    <div>
                        <h3>Rubberduck</h3>
                    </div>
                    <div>
                        <p>Complementary Icons</p>
                    </div>
                </div>
                <div className="p-20 flex flex-col gap-6 bg-gradient-to-b to-[#2C3333] from-[#1E1E1E] rounded-b-lg">
                    <div className="pb-1.5 flex gap-4 border-b-2 border-white bg-inherit">
                        <p>Username</p>
                        <input
                            type="text"
                            required={true}
                            className="flex-grow bg-inherit focus:outline-none"
                        />
                    </div>
                    <div className="pb-1.5 flex flex gap-4 border-b-2 border-white bg-inherit">
                        <p>Password</p>
                        <input
                            type="password"
                            required={true}
                            className="flex-grow bg-inherit focus:outline-none"
                        />
                    </div>
                    <div className="flex justify-end items-center gap-8">
                        <button className="text-[#FFBD69] uppercase">
                            Login
                        </button>
                        <button className="transition-transform transform origin-center ease-in duration-70 hover:scale-110 uppercase">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignIn;