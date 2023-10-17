import { connectMongo } from "@/libs/mongodb";

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/userModel";
import bcrypt from "bcrypt";
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";

const authOptions: NextAuthOptions = { 
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                try {
                    await connectMongo();

                    const user = await User.findOne({ email });
                    if (!user) throw new Error("Account does not exist!");

                    const match = bcrypt.compare(password, user.password);
                    if (!match) throw new Error("Wrong password");

                    return user;
                } catch (error){
                    console.log(error)
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/signin"
    }
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
