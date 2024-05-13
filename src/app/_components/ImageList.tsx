"use client";
import React, { useEffect, useState } from 'react'
import { IMAGES_PER_PAGE } from '~/config/constants';
import { type SelectImage } from '~/server/db/schema';
import { getImages } from '~/server/queries';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import ImageGallery from './ImageGallery';
import { Spinner } from './Spinner';

import { useHydrateAtoms } from 'jotai/utils';
import { imageListAtom } from '~/atoms/imageAtoms';
import { useAtom } from 'jotai';
import { toast } from 'sonner';



export default function ImageList({ imageList = [] }: { imageList?: SelectImage[] }) {
    const limit = IMAGES_PER_PAGE;

    const [offset, setOffset] = useState(IMAGES_PER_PAGE);
    const [isLoading, setIsLoading] = useState(false);

    useHydrateAtoms([[imageListAtom, imageList]])

    const [images, setImages] = useAtom(imageListAtom);



    const [scrollTrigger, isInView] = useInView();

    const loadMoreImages = async () => {
        setIsLoading(true);
        let apiImages: SelectImage[];

        try {
            apiImages = await getImages(limit, offset);
        } catch (error) {
            apiImages = [];

            if (error instanceof Error) {
                toast.error(error.message);
                console.error(error.message);
            } else {
                toast.error(`Something failed.`)
            }
        }

        setImages((prevImages) => [...prevImages, ...apiImages])
        setOffset((prevOffset) => prevOffset + IMAGES_PER_PAGE);

        setIsLoading(false);
    }

    useEffect(() => {
        if (isInView) {
            void loadMoreImages();

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])

    return (
        <>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 relative">
                {images.map((photo, index) => (
                    <li key={photo.id} className='relative'>
                        <Link href={`/img/${photo.id}`} scroll={false} passHref>
                            <ImageGallery image={photo} priority={index < limit} />
                        </Link>
                    </li>

                ))}
            </ul>
            <div ref={scrollTrigger} className='h-auto flex justify-center items-center'>
                {isInView && isLoading && (
                    <Spinner />
                )}
            </div>
        </>
    )
}
