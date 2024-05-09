"use client";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button"
import { deleteImage } from "~/server/queries";

export default function DeleteButton({ id }: { id: number }) {
    const router = useRouter();
    return (
        <form className='p-3 pb-5' action={
            async (e: FormData) => {

                await deleteImage(id);
                router.back();
                router.refresh();
            }
        }>
            <Button type='submit' variant="destructive">Delete</Button>
        </form>
    )
}
