"use client";

import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

const DotIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
        >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
        </svg>
    )
}

export const ClerkUserButton = () => {
    const { theme } = useTheme()
    return (
        <UserButton appearance={{
            baseTheme: theme === "dark" ? dark : undefined,
        }} >

        </UserButton>

    )
}
