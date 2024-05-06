import React from 'react'
import Image from 'next/image';
import { SelectImage } from '~/server/db/schema';
import { getImage } from '~/server/queries';
import { clerkClient } from '@clerk/nextjs/server';

export default async function FullImageView({ imageId }: { imageId: string }) {
    const idToNumber = Number(imageId);
    const image: SelectImage = await getImage(idToNumber);

    const userInfo = await clerkClient.users.getUser(image.userId);

    return (
        <div className='grid grid-flow-col grid-col-3'>
            <div className='col-span-2'>
                <img alt={image.name} src={image.url} />
            </div>
            <div className='flex flex-row items-center justify-around'>
                {image.createdAt.toLocaleString()}
                {userInfo.fullName}
            </div>
        </div>

    )
}
