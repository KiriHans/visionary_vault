import { type SelectImage } from '~/server/db/schema';
import { getImage } from '~/server/queries';
import { clerkClient } from '@clerk/nextjs/server';
import DeleteButton from '../_components/DeleteButton';



export default async function FullImageView({ imageId }: { imageId: string }) {
    const idToNumber = Number(imageId);
    const image: SelectImage = await getImage(idToNumber);

    const userInfo = await clerkClient.users.getUser(image.userId);

    return (
        <div className='flex flex-col sm:flex-row  bg-background/50 dark:bg-background/70 rounded-lg gap-0 w-full h-full relative'>
            <div className=' max-h-full h-[30svh] sm:h-full w-full flex justify-center items-center p-4 flex-grow relative'>
                <img alt={image.name} src={image.url} className='rounded-lg object-contain max-h-full h-full' />
            </div>
            <div className='flex flex-col items-left justify-between px-3 w-full sm:w-80 bg-gray-800/40 rounded-r-lg ' >
                <div className=' h-fit'>
                    <div className='border-b border-gray-600 dark:border-slate-300 p-4 text-center text-xl '>
                        {image.name}
                    </div>

                    <div className='pt-5 px-5 pb-3 flex flex-col sm:items-start items-center '>
                        <span className='sm:text-left text-center text-lg font-bold'>Uploaded On:</span>
                        {image.createdAt.toLocaleDateString()}
                    </div>
                    <div className='px-5 pt-2 pb-5 flex flex-col sm:items-start items-center'>
                        <span className='sm:text-left text-center text-lg font-bold'>Uploaded by:</span>
                        {userInfo.fullName}
                    </div>
                </div>
                <div className='flex justify-center sm:justify-start'>
                    <DeleteButton classnameContainer='flex justify-center p-3 pb-5 w-full' classnameButton='min-w-24 w-1/2' idImage={idToNumber} key={idToNumber} />
                </div>
            </div>
        </div>

    )
}
