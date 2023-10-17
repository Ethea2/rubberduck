"use client";

import { LayoutProps, PageProps } from "@/.next/types/app/layout";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }: LayoutProps) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
