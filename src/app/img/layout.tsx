import React from 'react'
import { TopNav } from '../_components/TopNav'

export default function ImageLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className='relative max-h-screen h-screen flex flex-col'>
            <TopNav />
            <main className='relative h-36 flex-grow'>
                {children}
            </main>


        </div>

    )
}
