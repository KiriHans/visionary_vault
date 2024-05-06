import React from 'react'
import { TopNav } from '../_components/TopNav'

export default function ImageLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <TopNav />
            {children}
        </div>

    )
}
