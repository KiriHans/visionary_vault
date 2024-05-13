import { type SelectImage } from '~/server/db/schema'
import Image from 'next/image';



export default function ImageGallery({ image, priority = false }: { image: SelectImage, priority?: boolean }) {
    return (
        <div className='relative w-full max-w-full aspect-video'>
            <Image
                className="rounded-lg object-cover object-center h-auto w-auto"
                src={image.url}
                alt={image.name}
                fill
                sizes={`${image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                priority={priority}
            />
        </div>
    )
}
