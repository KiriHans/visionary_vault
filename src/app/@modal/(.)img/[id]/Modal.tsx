'use client';
import {
    Dialog,
    DialogContent,
} from "~/components/ui/dialog"


import { useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<"dialog">>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        router.back();
    }

    return (
        <div className="rounded-lg">
            <Dialog defaultOpen >
                <DialogContent className="max-w-full bg-transparent border-0 rounded-lg text-white shadow-none p-0 w-11/12" onCloseAutoFocus={onDismiss}>
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    )
}
