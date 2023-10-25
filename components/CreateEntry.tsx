import { useState } from "react";

const CreateEntry = ({
    user,
    handleClose,
}: {
    user: string;
    handleClose: () => void;
}) => {
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    return (
        <div className="relative w-full my-8 flex flex-col gap-4 text-white">
            <h1 className="text-2xl font-bold">Create New Entry</h1>
            <div>
                <h2>Title</h2>
                <input
                    type="text"
                    className="w-full p-2 rounded-xl bg-black/30"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <h2>Content</h2>
                <textarea
                    className="w-full p-4 rounded-xl bg-black/30"
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>
            <hr className="w-full" />
            <div className="w-full flex flex-col gap-2">
                <p>Preview:</p>
                <div className="w-full h-1/2 bg-black/40 p-4 rounded-xl">
                    <p className="text-xl font-bold">{title}</p>
                    <hr className="border-0.5 border-white/30 mt-2 mb-4" />
                    <p>{content}</p>
                </div>
            </div>
            <div className="flex gap-4">
                <button className="bg-gradient-to-r from-[#FFBD69] to-[#D9D9D9] py-2 px-4 rounded-md">
                    Post Entry
                </button>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    );
};

export default CreateEntry;
