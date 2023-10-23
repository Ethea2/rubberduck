const CreateEntry = ({
    user,
    handleClose,
}: {
    user: string;
    handleClose: () => void;
}) => {
    return (
        <div className="relative w-full my-8 flex flex-col gap-4 text-white">
            <h1 className="text-2xl font-bold">Create New Entry</h1>
            <div>
                <h2>Title</h2>
                <input type="text" className="w-full" />
            </div>
            <div>
                <h2>Content</h2>
                <textarea className="w-full"></textarea>
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
