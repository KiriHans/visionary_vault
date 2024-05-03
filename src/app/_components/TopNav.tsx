import { ModeToggle } from "./ModeToggle"
import { SimpleUploadButton } from "./SimpleUploadButton"

export const TopNav = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className='container flex flex-row justify-between items-center px-5 py-3'>

                <SimpleUploadButton />
                <ModeToggle />

            </nav>
        </header>

    )
}

