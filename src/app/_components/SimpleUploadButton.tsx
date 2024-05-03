"use client";

import { UploadButton } from '../_utils/uploadthing';
import React from 'react'

export const SimpleUploadButton = () => {
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
                console.log("Files: ", res);
                alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
            }}

        />
    )
}


