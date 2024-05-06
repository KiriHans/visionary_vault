import { getImages } from '~/server/queries';
import Link from "next/link";

export const SimpleGallery = async () => {
    const images = await getImages();
    return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {images.map((photo, index) => (

                <li key={photo.id}>
                    <Link href={`/img/${photo.id}`} passHref>
                        <img
                            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                            src={photo.url}
                            alt={photo.name}
                        />

                    </Link>
                </li>
            ))}
        </ul>
    )
}


