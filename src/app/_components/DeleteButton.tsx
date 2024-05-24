"use client";
import { useSetAtom } from "jotai";
import { toast } from "sonner";
import { imageListAtom } from "~/atoms/imageAtoms";
import { Button } from "~/components/ui/button"
import { type SelectImage } from "~/server/db/schema";
import { deleteImage } from "~/server/queries";

export default function DeleteButton({ idImage: id, classnameContainer = '', classnameButton = '' }: { idImage: number, classnameContainer?: string, classnameButton?: string }) {
    const setImages = useSetAtom(imageListAtom);
    return (
        <form className={classnameContainer} action={
            async () => {
                let imageList: SelectImage[];
                setImages((state) => {
                    imageList = [...state];
                    return state.filter((image) => image.id !== id)
                })
                try {
                    await deleteImage(id);
                } catch (error) {
                    toast.error(`Something failed while deleting image\nPlease try again.`)
                    setImages(() => {
                        return imageList;
                    })
                }
            }
        }>
            <Button type='submit' variant="destructive" className={classnameButton}>Delete</Button>
        </form>
    )
}
