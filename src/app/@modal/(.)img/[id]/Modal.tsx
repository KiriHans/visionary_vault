"use client";

import {
    Dialog,
    DialogContent,
} from "~/components/ui/dialog"


import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [open, setOpen] = useState(true);

    function onDismiss(open: boolean) {
        setOpen(open)
        router.back();
    }


    return (
        <Dialog open={open} onOpenChange={onDismiss}>
            <DialogContent className="max-w-none w-[90vw] h-auto sm:w-3/4 max-h-screen sm:h-5/6 bg-transparent border-0 rounded-lg text-white shadow-none p-0 gap-0" >
                <div className="relative max-h-[80vh] h-auto flex flex-col">
                    {children}
                </div>
            </DialogContent>

        </Dialog>
    )
}