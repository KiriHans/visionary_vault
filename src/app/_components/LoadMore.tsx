"use client";
import React, { useEffect, useState } from 'react'
import { IMAGES_PER_PAGE } from '~/config/constants';
import { SelectImage } from '~/server/db/schema';
import { getImages } from '~/server/queries';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import ImageGallery from './ImageGallery';

const Spinner = () => {
    const radius = 56;
    const css = `
    .spinner_V8m1 {
      transform-origin: center;
      animation: spinner_zKoa 2s linear infinite;
    }
    
    .spinner_V8m1 circle {
      stroke-linecap: round;
      animation: spinner_YpZS 1.5s ease-in-out infinite;
    }

    .dark .spinner_V8m1{
        stroke: #FFF;
    }
    
    @keyframes spinner_zKoa {
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes spinner_YpZS {
      0% {
        stroke-dasharray: 0 150;
        stroke-dashoffset: 0;
      }
    
      47.5% {
        stroke-dasharray: 42 150;
        stroke-dashoffset: -16;
      }
    
      95%,
      100% {
        stroke-dasharray: 42 150;
        stroke-dashoffset: -59
      }
    }`

    return (
        <svg width={radius} height={radius} stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <style>
                {css}
            </style>
            <g className="spinner_V8m1">
                <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3"></circle>
            </g>
        </svg>
    )
}


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
                <li key={photo.id} className='relative'>
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
