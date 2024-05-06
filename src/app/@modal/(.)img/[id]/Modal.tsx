'use client';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
} from "~/components/ui/dialog"

import Link from "next/link"
import { Button } from "~/components/ui/button"
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
        <Dialog defaultOpen >
            <DialogContent className="max-w-full bg-background " onCloseAutoFocus={onDismiss}>
                {children}
            </DialogContent>
            <DialogFooter>
                <DialogClose>
                    <Link href="/"><Button>
                        close
                    </Button></Link>

                </DialogClose>
            </DialogFooter>

        </Dialog>
    )
}
