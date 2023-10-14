import { connectMongo } from "@/libs/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
    const { username } = await request.json();
    connectMongo();
    const user = await User.findOne({ username });
    return NextResponse.json({ user });
};

