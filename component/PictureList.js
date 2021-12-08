
import Image from 'next/image';
import React from 'react'

function PictureList({images}) {
  return(
    <div >
      <img key={images.id} src={images.urls.regular} />
    </div>
  )
}

export default PictureList;