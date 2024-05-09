"use client";

import {
    Dialog,
    DialogClose,
    DialogContent,
} from "~/components/ui/dialog"


import { useRouter, usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [open, setOpen] = useState(true);
    const pathname = usePathname()

    function onDismiss(open: boolean) {
        setOpen(open)
        router.back();
        console.log("on Dismiss")
    }

    // useEffect(() => {
    //     console.log("Pathname: ", pathname)
    //     if (pathname === "/") setOpen(false);
    // }, [pathname])



    return (
        <div className="rounded-lg">
            <Dialog open={open} onOpenChange={onDismiss}>
                <DialogContent className="max-w-fit h-11/12 bg-transparent border-0 rounded-lg text-white shadow-none p-0 w-11/12" >
                    {children}
                    <DialogClose asChild >
                        <Button type="button" variant="secondary" >
                            Close
                        </Button>
                    </DialogClose>
                </DialogContent>

            </Dialog>
        </div>
    )
}


// import { type ElementRef, useEffect, useRef, useCallback } from "react";
// import { useRouter } from "next/navigation";
// import { createPortal } from "react-dom";
// import { Button } from "~/components/ui/button";

// export default function Modal({ children }: { children: React.ReactNode }) {
//     const router = useRouter();
//     const dialogRef = useRef<ElementRef<"dialog">>(null);

//     useEffect(() => {
//         if (!dialogRef.current?.open) {
//             dialogRef.current?.showModal();
//         }
//     }, []);

//     const onDismiss = useCallback(() => {
//         router.back()
//     }, [router])

//     return createPortal(
//         <dialog
//             ref={dialogRef}
//             className="absolute h-screen w-screen bg-black/90"
//             onClose={onDismiss}
//         >
//             {children}
//             {/* <Button onClick={onDismiss} className="close-button" /> */}
//         </dialog>,
//         document.getElementById("modal-root")!,
//     );
// }
