"use client";

import { UploadButton } from '../_utils/uploadthing';
import React from 'react'

export const SimpleUploadButton = () => {
    return (
        <UploadButton
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


