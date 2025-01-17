import React from 'react'
import Milkbottles from '../../images/desktop/image-gallery-milkbottles.jpg'
import Orange from '../../images/desktop/image-gallery-orange.jpg'
import Cone from '../../images/desktop/image-gallery-cone.jpg'
import Sugar from '../../images/desktop/image-gallery-sugarcubes.jpg'

const ImageGrid = () => {
  return (
    <div className='grid grid-cols-4'>
      {/* Gallery Image */}
      <div className='overflow-hidden w-full'>
        <img src={Milkbottles} alt="" />  
      </div>

      {/* Gallery Image */}
      <div className='overflow-hidden w-full '>
        <img src={Orange} alt="" />  
      </div>

      {/* Gallery Image */}
      <div className='overflow-hidden w-full '>
        <img src={Cone} alt="" />  
      </div>

      {/* Gallery Image */}
      <div className='overflow-hidden w-full '>
        <img src={Sugar} alt="" />  
      </div>
    </div>
  )
}

export default ImageGrid
