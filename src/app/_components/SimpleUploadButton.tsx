"use client";

import { useRouter } from 'next/navigation';
import { UploadButton } from '../_utils/uploadthing';

export const SimpleUploadButton = () => {
    const router = useRouter()

    return (
        <UploadButton
            appearance={{
                button: "bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
                allowedContent: "text-secondary-foreground/80",
                container: "w-max flex-row rounded-md border-cyan-300 gap-3"
            }}
            endpoint="imageGallery"
            onClientUploadComplete={(res) => {
                // Do something with the response
                router.refresh();
            }}
            onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
            }}

        />
    )
}


