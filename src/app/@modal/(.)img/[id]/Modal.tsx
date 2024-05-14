"use client";

import {
    Dialog,
    DialogClose,
    DialogContent,
} from "~/components/ui/dialog"


import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { useState } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [open, setOpen] = useState(true);

    function onDismiss(open: boolean) {
        setOpen(open)
        router.back();
        console.log("on Dismiss")
    }


    return (
        <Dialog open={open} onOpenChange={onDismiss}>
            <DialogContent className="max-w-none w-[90vw] h-auto sm:w-3/4 max-h-screen sm:h-5/6 bg-transparent border-0 rounded-lg text-white shadow-none p-0 gap-0" >
                <div className="relative max-h-[80vh] h-auto flex flex-col">
                    {children}

                </div>
                {/* <DialogClose asChild className="p-0 sm:absolute sm:right-5 sm:bottom-10 sm:max-w-20 sm:min-w-14 " >
                    <Button type="button" variant="secondary" >
                        Close
                    </Button>
                </DialogClose> */}
            </DialogContent>

        </Dialog>
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
