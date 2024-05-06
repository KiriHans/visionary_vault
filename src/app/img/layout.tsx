import React from 'react'
import { TopNav } from '../_components/TopNav'

export default function ImageLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex flex-col flex-grow min-h-screen'>
            <TopNav />

            {children}

        </div>

    )
}
