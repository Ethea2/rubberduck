import { connectMongo } from "@/libs/mongodb";

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/userModel";
import bcrypt from "bcrypt";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
				connectMongo();
				const { email, password } = credentials as {
					email: string;
					password: string;
				};
                console.log(email)
				const user = await User.findOne({ email });
				if (!user) {
					throw new Error("Account does not exist!");
				}
				const match = await bcrypt.compare(password, user.password);
				if (!match) {
					throw new Error("Wrong password");
				}
				return {
					name: user.username,
					email: user.email,
					id: user._id,
				};
			},
        }),
    ],
    callbacks: {
        session({ session }) {
            console.log(session);
            return session;
        },
    },
    pages: {
        signIn: "/signin",
        error: "/signin"
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
