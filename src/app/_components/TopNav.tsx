
import { ClerkUserButton } from "./ClerkUserButton"
import { ModeToggle } from "./ModeToggle"
import { SimpleUploadButton } from "./SimpleUploadButton"

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export const TopNav = () => {
    return (
        <header className=" top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className='container flex flex-row justify-between items-center px-5 py-3'>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <SimpleUploadButton />
                </SignedIn>

                <div className="flex flex-row justify-end gap-4">

                    <ModeToggle />
                    <SignedIn  >
                        <ClerkUserButton />
                    </SignedIn>
                </div>

            </nav>
        </header>

    )
}

