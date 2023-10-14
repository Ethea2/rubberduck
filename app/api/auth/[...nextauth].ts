import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/userModel";
import bcrypt from "bcrypt";

const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { username, password } = credentials as {
                    username: string;
                    password: string;
                };
                const user = await User.findOne({ username });
                if (!user) throw new Error("Account does not exist!");
                const match = bcrypt.compare(password, user.password);
                if (!match) throw new Error("Wrong password");
                return user;
            },
        }),
    ],
};