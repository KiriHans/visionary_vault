import { getImages } from '~/server/queries';
import Link from "next/link";
import LoadMore from './LoadMore';
import ImageGallery from './ImageGallery';

export const dynamic = "force-dynamic";

export const SimpleGallery = async () => {
    const images = await getImages();
    return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 relative">
            {images.map((photo, index) => (

                <li key={photo.id} >
                    <Link href={`/img/${photo.id}`} passHref>
                        {/* <img
                            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                            src={photo.url}
                            alt={photo.name}
                        /> */}
                        <ImageGallery image={photo} priority />
                    </Link>
                </li>
            ))}
            <LoadMore />
        </ul>
    )
}


