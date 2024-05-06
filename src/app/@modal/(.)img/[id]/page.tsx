import FullImageView from '~/app/_view/FullImageView';
import Modal from './Modal';

export default function ImageModal({ params: { id: imageId } }: { params: { id: string } }) {
    return (
        <Modal>
            <FullImageView imageId={imageId} />
        </Modal>
    )
}
