import FullImageView from '~/app/_view/FullImageView';

export default function ImagePage({ params: { id: imageId } }: { params: { id: string } }) {
  return (

    <FullImageView imageId={imageId} />

  )
}
