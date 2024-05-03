

import { MOCK_IMAGES } from '../_mock/imagesMock';

export const SimpleGallery = () => {

    return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {MOCK_IMAGES.map((photo, index) => (
                <li key={index}>
                    <img
                        className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                        src={photo.src}
                        alt={photo.name}
                    />
                </li>
            ))}

        </ul>
    )
}


