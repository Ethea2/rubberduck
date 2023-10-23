import { connectMongo } from "@/libs/mongodb";
import Diary from "@/models/diaryModel";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export const POST = async (req: Request) => {
    const { title, content } = await req.json();
    connectMongo();

    const session = await getServerSession();
    if (!session || !session.user) {
        return NextResponse.json({ message: "Unauthorized!" }, { status: 400 });
    }

    if (!title || !content) {
        return NextResponse.json(
            { message: "Fill out all required fields." },
            { status: 400 }
        );
    }

    const newEntry = await Diary.create({
        username: session.user.name,
        title,
        content,
    });

    if (newEntry) {
        return NextResponse.json({ message: "Entry created!" });
    }
    return NextResponse.json(
        { message: "Something went wrong!" },
        { status: 500 }
    );
    // return (  );
};
