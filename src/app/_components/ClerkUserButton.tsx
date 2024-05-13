"use client";

import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

export const ClerkUserButton = () => {
    const { theme } = useTheme()
    return (
        <UserButton appearance={{
            baseTheme: theme === "dark" ? dark : undefined,
        }} >

        </UserButton>

    )
}
