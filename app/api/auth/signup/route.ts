import { connectMongo } from "@/libs/mongodb";
import bcrypt from "bcrypt";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

const BCRYPT_SALT_ROUNDS = 12;

export const POST = async (req: Request) => {
    const { username, password, email } = await req.json();
    const loginUrl = new URL('/signin', req.url)
    connectMongo();

    if (!username || !password || !email) {
        return NextResponse.json({ message: "Fill out all required fields." }, {status: 400});
    }

    const user = await User.findOne({
        $or: [{ username }, { email }],
    });
    if (user !== null)
        return NextResponse.json({ message: "User already exists" }, {status: 400});

    const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
    const hashedPass = await bcrypt.hash(password as string, salt);

    const newUser = await User.create({
        username,
        password: hashedPass,
        email,
    });

    if (newUser)
        return NextResponse.json({ message: "Successfully Registered!" });

    return NextResponse.json({ message: "Something went wrong!" }, {status: 500});
};
