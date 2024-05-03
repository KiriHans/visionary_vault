import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import { MOCK_IMAGES } from '../_mock/imagesMock';

export const Gallery = () => {

  return (
    <>

      <ImageList variant="masonry" cols={5} gap={4} className='w-auto sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
        {MOCK_IMAGES.map((photo) => (
          <ImageListItem key={photo.src} >
            <div className="flex flex-col" >
              <Image
                src={photo.src}
                height={480}
                width={480}
                style={
                  {
                    objectFit: "contain"
                  }
                }
                alt={photo.name}

              />
            </div>




            {/* <img
            srcSet={`${photo.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${photo.src}?w=248&fit=crop&auto=format`}
            alt={photo.name}
            loading="lazy"
          /> */}
          </ImageListItem>
        ))}
      </ImageList>
      <script>
        console.log("maria");
      </script>
    </>


  )
}


