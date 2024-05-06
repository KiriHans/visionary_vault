import FullImageView from '~/app/_view/FullImageView';

export default function ImagePage({ params: { id: imageId } }: { params: { id: string } }) {
  return (
    <div className="h-svh w-full">

      <FullImageView imageId={imageId} />
    </div>
  )
}
