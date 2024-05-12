import { getImages } from '~/server/queries';
import ImageList from './ImageList';


export const dynamic = "force-dynamic";

export const SimpleGallery = async () => {
    const images = await getImages();
    return (
        <ImageList imageList={images} />
    )
}


