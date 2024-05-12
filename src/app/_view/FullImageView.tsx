import { SelectImage } from '~/server/db/schema';
import { getImage } from '~/server/queries';
import { clerkClient } from '@clerk/nextjs/server';
import DeleteButton from '../_components/DeleteButton';



export default async function FullImageView({ imageId }: { imageId: string }) {
    const idToNumber = Number(imageId);
    const image: SelectImage = await getImage(idToNumber);

    const userInfo = await clerkClient.users.getUser(image.userId);

    return (
        <div className='flex flex-row  bg-background/50 dark:bg-background/70 rounded-lg gap-0 w-full h-full relative'>
            <div className=' max-h-full h-full w-full flex justify-center items-center p-4 flex-grow relative'>
                <img alt={image.name} src={image.url} className='rounded-lg object-contain max-h-full h-full' />
            </div>
            <div className='flex flex-col  items-left justify-start px-3 w-80 bg-gray-800/40 rounded-r-lg' >
                <div className='pt-5 p-5 flex flex-col items-center '>
                    <span className='text-center text-lg font-bold'>Uploaded On:</span>
                    {image.createdAt.toLocaleDateString()}
                </div>
                <div className='p-2 flex flex-col items-center '>
                    <span className='text-center text-lg font-bold'>Uploaded by:</span>
                    {userInfo.fullName}
                </div>
                <DeleteButton id={idToNumber} />
            </div>
        </div>

    )
}
