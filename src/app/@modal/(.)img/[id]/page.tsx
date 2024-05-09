import FullImageView from '~/app/_view/FullImageView';
import Modal from './Modal';
export const dynamic = "force-dynamic";

export default async function ImageModal({ params: { id: imageId } }: { params: { id: string } }) {
    return (
        <Modal key={imageId}>
            <FullImageView imageId={imageId} />
        </Modal>
    )
}
