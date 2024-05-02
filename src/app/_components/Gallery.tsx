import PhotoAlbum from "react-photo-album";

const mockData = [
  "https://utfs.io/f/e1bb3159-423d-4c84-ac8c-5cfbd86b327c-ngeocy.png",
  "https://utfs.io/f/b33fb0b9-bae1-47c5-8615-b9a12935a673-z6lvsc.jpg",
  "https://utfs.io/f/6c2538b9-dff7-4fef-a58a-5b2e171b2e46-k8xrbv.png",
  "https://utfs.io/f/14055197-f1f4-483d-a033-724c763bf1ef-5zlr1d.jpg",
  "https://utfs.io/f/5a24016e-c3e3-4a54-8be8-0ad4774333d0-8nazuw.jpg",
]

const mockImages = mockData.map((url, id) => ({
  src: url,
  width: 500,
  height: 500,
}))

function gallery() {
  return (
    <div></div>
  )
}

export default gallery