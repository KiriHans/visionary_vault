

import { db } from '~/server/db';
import { getPhotos } from '~/server/queries';

export const SimpleGallery = async () => {
    const images = await getPhotos();
    return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {images.map((photo, index) => (
                <li key={index}>
                    <img
                        className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                        src={photo.url}
                        alt={photo.name}
                    />
                </li>
            ))}
        </ul>
    )
}


