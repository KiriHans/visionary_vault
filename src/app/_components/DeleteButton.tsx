"use client";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { imageListAtom } from "~/atoms/imageAtoms";
import { Button } from "~/components/ui/button"
import { type SelectImage } from "~/server/db/schema";
import { deleteImage } from "~/server/queries";

export default function DeleteButton({ idImage: id }: { idImage: number }) {
    const router = useRouter();
    const setImages = useSetAtom(imageListAtom);
    return (
        <form className='p-3 pb-5' action={
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
                router.back();
            }
        }>
            <Button type='submit' variant="destructive">Delete</Button>
        </form>
    )
}
