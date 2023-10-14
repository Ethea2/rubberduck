import { connectMongo } from "@/libs/mongodb";
import bcrypt from "bcrypt";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

const BCRYPT_SALT_ROUNDS = 12;

export const GET = async (request: Request) => {
    const { username } = await request.json();
    connectMongo();
    const user = await User.findOne({ username });
    return NextResponse.json({ user });
};

export const POST = async (req: Request) => {
    const { username, password, email } = await req.json();
    connectMongo();

    if (!username || !password || !email) {
        return NextResponse.json({ message: "Missing parameters" });
    }

    const user = await User.findOne({
        $or: [{ username }, { email }],
    });
    if (user !== null)
        return NextResponse.json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
    const hashedPass = await bcrypt.hash(password as string, salt);

    const newUser = await User.create({
        username,
        password: hashedPass,
        email,
    });

    if (newUser)
        return NextResponse.json({ message: "Successfully Registered!" });

    return NextResponse.json({ message: "Something went wrong!" });
};
