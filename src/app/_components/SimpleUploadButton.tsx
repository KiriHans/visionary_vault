"use client";

import { useRouter } from 'next/navigation';
import { UploadButton } from '../_utils/uploadthing';
import { toast } from 'sonner';
import { Upload } from 'lucide-react';
import { Spinner } from './Spinner';

export const SimpleUploadButton = () => {
    const router = useRouter()

    return (
        <>
            <UploadButton
                content={{
                    button: ({ ready, isUploading, uploadProgress }) => {
                        if (!ready) return (
                            <Spinner radius={10} className='dark:stroke-black stroke-white' />
                        )
                        if (isUploading) return (
                            <div className='flex flex-row gap-1 items-center justify-center'>
                                <Spinner radius={26} className='dark:stroke-black stroke-white' />
                                {uploadProgress}%
                            </div>

                        )
                        return (
                            <>
                                <div className='flex flex-row gap-1 items-center justify-center'>
                                    <Upload height={"1rem"} width={"1rem"} />
                                    <span>Choose File</span>
                                </div>
                            </>
                        )
                    },
                    clearBtn: ({ isUploading }) => {
                        return (
                            <Spinner radius={26} />
                        )
                    }
                }}
                appearance={{
                    button: "bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 after:bg-secondary",
                    allowedContent: "text-secondary-foreground/80",
                    container: "w-max flex-row rounded-md border-cyan-300 gap-3"
                }}
                endpoint="imageGallery"
                onUploadBegin={() => {
                    toast(<div className='flex gap-2 items-center text-lg' ><Spinner radius={22} /> Uploading...</div>, {
                        duration: 5000,
                        id: "upload-begin"
                    })
                }}
                onClientUploadComplete={(res) => {
                    toast.dismiss("upload-begin");
                    toast("Upload Completed!", {
                        duration: 5000,
                        id: "upload-completed"
                    })
                    router.refresh();
                }}
                onUploadError={(error: Error) => {
                    toast.dismiss("upload-begin");
                    toast.error("Upload failed");
                }}

            />
        </>

    )
}


