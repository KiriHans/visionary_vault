"use client";

import React from 'react'
import { UploadButton } from '../_utils/uploadthing';

function TopNav() {
    return (
        <nav className='flex flex-row justify-end'>
            <UploadButton
                endpoint="imageUploader"
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
        </nav>
    )
}

export default TopNav