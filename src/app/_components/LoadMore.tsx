"use client";
import React, { useEffect, useState } from 'react'
import { IMAGES_PER_PAGE } from '~/config/constants';
import { SelectImage } from '~/server/db/schema';
import { getImages } from '~/server/queries';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import ImageGallery from './ImageGallery';
import { Spinner } from './Spinner';



export default function LoadMore() {
    const limit = IMAGES_PER_PAGE;
    const [offset, setOffset] = useState(IMAGES_PER_PAGE);
    const [images, setImages] = useState<SelectImage[]>([]);

    const [isLoading, setIsLoading] = useState(false);


    const [scrollTrigger, isInView] = useInView();

    const loadMoreImages = async () => {
        setIsLoading(true);

        const apiImages = await getImages(limit, offset);

        setImages((prevImages) => [...prevImages, ...apiImages])
        setOffset((prevOffset) => prevOffset + IMAGES_PER_PAGE);

        setIsLoading(false);
    }

    useEffect(() => {
        if (isInView) {
            loadMoreImages();
        }
    }, [isInView])

    return (
        <>
            {images.map((photo, index) => (
                <li key={photo.id} className='relative bg-slate-600'>
                    <Link href={`/img/${photo.id}`} passHref>
                        <ImageGallery image={photo} />
                    </Link>
                </li>

            ))}
            <div ref={scrollTrigger} className='h-auto flex justify-center items-center'>
                {isInView && isLoading && (
                    <Spinner />
                )}
            </div>
        </>
    )
}
