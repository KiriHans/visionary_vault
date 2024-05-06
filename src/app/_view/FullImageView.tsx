import React from 'react'
import { SelectImage } from '~/server/db/schema';
import { getImage } from '~/server/queries';
import { clerkClient } from '@clerk/nextjs/server';

export default async function FullImageView({ imageId }: { imageId: string }) {
    const idToNumber = Number(imageId);
    const image: SelectImage = await getImage(idToNumber);

    const userInfo = await clerkClient.users.getUser(image.userId);

    return (
        <div className='flex flex-row flex-grow auto-cols-max bg-background/50 dark:bg-background/70 rounded-lg gap-0 justify-between'>
            <div className='flex-grow p-4 justify-center m-auto w-full '>
                <img alt={image.name} src={image.url} className='rounded-lg  object-contain m-auto' />
            </div>
            <div className='flex flex-col items-center justify-start px-3 w-80 bg-gray-800/40 rounded-r-lg h-auto' >
                <div className='pt-5 p-5 flex flex-col items-center '>
                    <span className='text-center text-lg font-bold'>Created At:</span>
                    {image.createdAt.toLocaleString()}
                </div>
                <div className='p-2 flex flex-col items-center '>
                    <span className='text-center text-lg font-bold'>Uploaded by:</span>
                    {userInfo.fullName}
                </div>

            </div>
        </div>

    )
}
