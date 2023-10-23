import { connectMongo } from "@/libs/mongodb";
import Diary from "@/models/diaryModel";
import { NextResponse } from "next/server";

export const POST  =  async (req: Request) => {
    const {title, content, username} = await req.json()
    connectMongo();

    if (!title || !content) {
        return NextResponse.json({ message: "Fill out all required fields." }, {status: 400});
    }

    const newEntry = await Diary.create({
        username,
        title,
        content
    })

    if (newEntry){
        return NextResponse.json({ message: "Entry created!" });
    }
    return NextResponse.json({ message: "Something went wrong!" }, {status: 500});
    // return (  );
}
